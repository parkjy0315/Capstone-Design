const asyncify = require('express-asyncify');
const express = require('express');
const app = asyncify(express());
const fs = require('fs');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const moment = require('moment');
const momentTimezone = require('moment-timezone');
const dateUtils = require('date-utils');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const admin = require("firebase-admin");
const firestore = require("firebase-admin/firestore");
const auth = require("firebase-admin/auth");
const serviceAccount = require("./hscoin-d8ff7-firebase-adminsdk-unmpe-a6a77a60b5.json");
const { send, allowedNodeEnvironmentFlags, getMaxListeners } = require('process');
const { json } = require('express');
const PORT = 80;

//유저모델
const userAgentModel = require('./models/userAgentModel');

//Hscoin 관련 정보
const HSCOIN_ADDRESS = '0xF2487613e9a890B6AaC89cDcEDBA8aa62A7Dd380'; // hscoin 컨트랙트 주소
const HSCOIN_JSON_FILE = '../hscoin-contract/build/contracts/Hscoin.json';
const HSCOIN_JSON_PARSED = JSON.parse(fs.readFileSync(HSCOIN_JSON_FILE));
const HSCOIN_ABI = HSCOIN_JSON_PARSED.abi;

const RETURN_CODE = {
    'SUCCESS':100,
    'NONE_ADDRESS':200,
    'NOT_ENOUGH_MONEY':201,
    'PASSWORD_ERR':202,
    'ALREADY_EXIST':203,
    'NONE_ID':204,
};

const DB_COLLECTION = {
    'USERS':'users',
    'FRANCHISE':'franchise',
    'TRANSACTION_LOG':'transaction_log',
    'TRANSACTION_HASH':'transaction_hash',
    'FAVICON':'favicon'
};

const TRANSACTION_TYPE = {
    'PAYMENT':'payment',
    'REMITTANCE':'remittance',
};

let accountList;
let hsContract;
let web3;

/**
 * Web3, HsContract 객체 생성
 */
async function initWeb3() {
    web3 = new Web3('http://127.0.0.1:8545');
    accountList = await web3.eth.getAccounts();
    hsContract = new web3.eth.Contract(HSCOIN_ABI, HSCOIN_ADDRESS);
    console.log("### Web3 Init");
}

/////////////////////////////////////////
// DB 관련 함수

/**
 * DB에 값 추가
 * @param {string} collectionName 컬렉션 이름
 * @param {string} documentName 문서 이름
 * @param {object} dataObject 저장될 객체(JSON)
 */
 async function putItemToDB(collectionName, documentName, dataObject) {
    let ps = await db.collection(collectionName);
    ps.doc(documentName).set(dataObject);
    console.log(`### DB ${documentName} save`);
}

/**
 * DB에 값 삭제
 * @param {*} collectionName 
 * @param {*} documentName 
 */
async function removetemToDB(collectionName, documentName) {
    let ps = await db.collection(collectionName);
    ps.doc(documentName).delete();
    console.log(`### DB ${documentName} delete`);
}

/**
 * DB에 값 수정
 * @param {string} collectionName 
 * @param {string} documentName 
 * @param {obejct} dataObject 
 */
async function modifyDBItem(collectionName, documentName, dataObject) {
    let userRef = await db.collection(collectionName).doc(documentName);
   
    return new Promise(resolve => {
        userRef.update({
            username:dataObject['username'],
            userpw:dataObject['userpw'],
            useremail:dataObject['useremail'],
            userphone:dataObject['userphone']
        });
        console.log(`### DB ${documentName} update`);
        resolve(RETURN_CODE['SUCCESS']);
    })
}

/**
 * 즐겨찾기 추가
 * @param {string} userId
 * @param {obj} faviconObject 
 */
async function addFavicon(userId, faviconObject) {
    let userFaviconRef = await db.collection(DB_COLLECTION['FAVICON']);
    let faviconName = await getUserInfo(faviconObject['userId']);
    faviconObject.userName = faviconName['username'];
    let ownerRef = await userFaviconRef.where('owner', '==', userId)
    .where('userId', '==', faviconObject['userId']).get();
    
    return new Promise(resolve => {
        if(ownerRef.size == 0) {
            userFaviconRef.add(faviconObject);
            console.log(`### DB ${faviconObject} save`);
            resolve(RETURN_CODE['SUCCESS']);
        } else {
            console.log(`### DB ${faviconObject} not save`);
            resolve(RETURN_CODE['ALREADY_EXIST']);
        }
    });
}

/**
 * 즐겨찾기 삭제
 * @param {string} userId
 * @param {string} faviconName 
 */
async function removeFavicon(userId, faviconName) {
    let userFaviconRef = await db.collection(DB_COLLECTION['FAVICON']);
    let ownerRef = await userFaviconRef.where('owner', '==', userId)
    .where('userId', '==', faviconObject['userId']).get();
    
    return new Promise(resolve => {
        if(ownerRef.size == 0) {
            userFaviconRef.add(faviconObject);
            console.log(`### DB ${faviconObject} save`);
            resolve(RETURN_CODE['SUCCESS']);
        } else {
            console.log(`### DB ${faviconObject} not save`);
            resolve(RETURN_CODE['ALREADY_EXIST']);
        }
    })
}

/**
 * 즐겨찾기 목록 불러오기
 * @param {string} userId 
 * @return {list}
 */
async function getFaviconList(userId) {
    let faviconList = await db.collection(DB_COLLECTION['FAVICON']).where('owner', '==', userId).get();
    return new Promise(resolve => {
        let faviconObj = {};
        faviconList.forEach(doc => {
            let data = doc.data();
            let key = doc.data()['userName'];
            delete data['owner'];
            delete data['userName'];
            faviconObj[key] = data;
        });
        console.log(faviconObj);
        resolve(faviconObj);
    });
}

// DB 관련 함수
/////////////////////////////////////////



/////////////////////////////////////////
// 트랜잭션 관련 함수

/**
 * ETH 전송 함수
 * @param {string} senderAddress 전송측 주소
 * @param {string} receiverAddress 송신측 주소
 * @param {int} amount 보낼 금액 (1ETH 단위)
 */
 async function transferETH(senderAddress, receiverAddress, amount) {
    let decimals = await hsContract.methods.decimals().call();
    decimals = parseInt(decimals);
    await web3.eth.sendTransaction({
        from:senderAddress,
        to:receiverAddress,
        value: new BigNumber(amount * 10 ** decimals)
    });
}

/**
 * HSC 전송 함수
 * @param {string} senderAddress 전송측 주소
 * @param {string} receiverAddress 송신측 주소
 * @param {int} amount 보낼 금액(1HSC 단위)
 */
 async function transferHSC(senderAddress, receiverAddress, amount) {
    let decimals = await hsContract.methods.decimals().call();
    decimals = parseInt(decimals);
    let transactionObj = await hsContract.methods.transfer(
        receiverAddress,
        new BigNumber(amount * 10 ** decimals)
    ).send({from:senderAddress});
    console.log(`${transactionObj['transactionHash']}`);
    let transactionHash = transactionObj['transactionHash'];
    let currTimeMilli = moment().format('x');
    putItemToDB(DB_COLLECTION['TRANSACTION_HASH'], currTimeMilli, {hash:transactionHash});
    await web3.eth.getTransaction(transactionHash).then(console.log);
}

/**
 * 송금 함수 (sender to receiver)
 * @param {*} senderAddress 전송측 주소
 * @param {*} receiverAddress 송신측 주소
 * @param {*} amount 보낼 금액
 * @returns {int} 성공 여부 (성공: 100, 송신측 주소 없음: 200, 잔액부족: 201)
 */
async function remittanceCoin(senderAddress, receiverAddress, amount) {
    let resultCode = 0;
    let currTimeMilli = moment().format('x');
    let senderId = await getUserId(senderAddress);
    let receiverId = await getUserId(receiverAddress); 
    let accountPassword = await getAccountPassword(senderAddress);
    let remitInfo = {
        senderAddress:senderAddress,
        senderId:senderId,
        receiverAddress:receiverAddress,
        receiverId:receiverId,
        amount:amount,
        transactionType:TRANSACTION_TYPE['REMITTANCE'],
        transactionTime:moment().format('YYYY-MM-DD HH:mm:ss')
    };

    if(await isAddressInDB(senderAddress) && await isAddressInDB(receiverAddress)) {
        console.log("### remittance address check true");
        let senderBalance = await balanceInquiry(senderAddress);
        senderBalance = parseInt(senderBalance);
        amount = parseInt(amount);
        if(senderBalance >= amount) {
            console.log("### remittance balance check true");
            await web3.eth.personal.unlockAccount(senderAddress, accountPassword);
            await transferHSC(senderAddress, receiverAddress, amount);
            putItemToDB(DB_COLLECTION['TRANSACTION_LOG'], currTimeMilli, remitInfo);
            resultCode = RETURN_CODE['SUCCESS'];
            console.log(`### remittance return code SUCCESS(${RETURN_CODE['SUCCESS']})`);
        } else {
            console.log("### remittance balance check false");
            resultCode = RETURN_CODE['NOT_ENOUGH_MONEY'];
            console.log(`### remittance return code NOT_ENOUGH_MONEY(${RETURN_CODE['NOT_ENOUGH_MONEY']})`);
        }         
    } else {
        console.log("### remittance balance check false");
        resultCode = RETURN_CODE['NONE_ADDRESS'];
        console.log(`### remittance return code NONE_ADDRESS(${RETURN_CODE['NONE_ADDRESS']})`);
    }

    return resultCode;
}

/**
 * 가맹점 주소로 결제 진행
 * @param {string} senderAddress 전송측 주소
 * @param {string} receiverAddress 송신측 주소
 * @param {int} amount 보낼 금액
 * @returns {int} 성공 여부 (성공: 100, 송신측 주소 없음: 200, 잔액부족: 201)
 */
// 
async function paymentCoin(senderAddress, receiverAddress, amount) {
    let resultCode = 0;
    let currTimeMilli = moment().format('x');
    let senderId = await getUserId(senderAddress);
    let receiverId = await getUserId(receiverAddress); 
    let accountPassword = await getAccountPassword(senderAddress);
    let remitInfo = {
        senderAddress:senderAddress,
        senderId:senderId,
        receiverAddress:receiverAddress,
        receiverId:receiverId,
        amount:amount,
        transactionType:TRANSACTION_TYPE['PAYMENT'],
        transactionTime:moment().format('YYYY-MM-DD HH:mm:ss')
    };

    if(await isAddressInDB(senderAddress) && await isAddressInDB(receiverAddress)) {
        console.log("### payment address check true");
        let senderBalance = await balanceInquiry(senderAddress);
        senderBalance = parseInt(senderBalance);
        amount = parseInt(amount);
        if(senderBalance >= amount) {
            console.log("### payment balance check true");
            await web3.eth.personal.unlockAccount(senderAddress, accountPassword);
            await transferHSC(senderAddress, receiverAddress, amount);
            putItemToDB(DB_COLLECTION['TRANSACTION_LOG'], currTimeMilli, remitInfo);
            resultCode = RETURN_CODE['SUCCESS'];
            console.log(`### payment return code SUCCESS(${RETURN_CODE['SUCCESS']})`);
        } else {
            console.log("### payment balance check false");
            resultCode = RETURN_CODE['NOT_ENOUGH_MONEY'];
            console.log(`### payment return code NOT_ENOUGH_MONEY(${RETURN_CODE['NOT_ENOUGH_MONEY']})`);
        }         
    } else {
        console.log("### payment balance check false");
        resultCode = RETURN_CODE['NONE_ADDRESS'];
        console.log(`### payment return code NONE_ADDRESS(${RETURN_CODE['NONE_ADDRESS']})`);
    }

    console.log(resultCode);
    return resultCode;
}

// 트랜잭션 관련 함수
/////////////////////////////////////////

/////////////////////////////////////////
// 유효성 검사 함수

/**
 * 해당 주소가 DB에 존재하는지 확인
 * @param {string} inquiryAddress 조회할 계정 주소
 * @returns {boolean} 존재 여부
 */
 async function isAddressInDB(inquiryAddress) {
    let result = false;
    let userInfoRef = await db.collection(DB_COLLECTION['USERS']);
    let snapShot = await userInfoRef.where('accountAddress', '==', inquiryAddress).get();
    console.log(`### ${inquiryAddress} isAddressInDB ${!snapShot.empty}`);
    return !snapShot.empty;
}

/**
 * 유저의 아이디 비밀번호 정보 대조
 * @param {string} userId 유저 아이디
 * @param {string} userPassword  유저 패스워드
 * @returns {boolean} 일치 여부
 */
async function isIdInDb(userId) {
    let userInfoRef = await db.collection(DB_COLLECTION['USERS']);
    let snapShot = await userInfoRef.where('userid', '==', userId).get();
    console.log(`### ${userId} isAddressInDB ${!snapShot.empty}`);
    return !snapShot.empty;
}

/**
 * 유저의 아이디 비밀번호 정보 대조
 * @param {string} userId 유저 아이디
 * @param {string} userPassword  유저 패스워드
 * @returns {boolean} 일치 여부
 */
 async function isPasswordRight(userId, userPassword) {
    let ps = await db.collection(DB_COLLECTION['USERS']).doc(userId).get();
    let password = ps.data().userpw;
    let isSuccess = false;
    isSuccess = (password == userPassword ? true : false);
    console.log(`### userId = ${userId}, userPassword = ${userPassword} isSuccess ${isSuccess}`);
    return isSuccess;
}

/**
 * 회원가입 시 유저 아이디가 중복되는지 확인
 * @param {string} userid 
 */
 function checkIdDuplicate(userid){
    var password = "";
    return new Promise((resolve,reject)=>{
        let ps = db.collection('users').doc(userid);
        ps.onSnapshot(docSnapshot => {
            try{
                password = docSnapshot["_fieldsProto"]["userpw"]["stringValue"];
                userid = docSnapshot["_fieldsProto"]["userid"]["stringValue"];
            }catch(e){
                if(password === ""){
                    resolve('200');
                    console.log(`### userId = ${userid} is not duplicated`);
                    return false;
                }
            }finally{
                if(password !== ""){
                    resolve('100');
                    console.log(`### userId = ${userid} is duplicated`);
                }
            }
        },(err)=>{
            console.log(`${err}`);
        })
    })
}

/**
 * 유저 로그인 함수
 * @param {string} id 
 * @param {string} pw 
 */
function userlogin(id,pw) {
    return new Promise((res,rej)=>{
        let ps = db.collection('users').doc(id);
        let password= "";
        let member = {};
    
        ps.onSnapshot(docSnapshot => {
            try{
                password = docSnapshot["_fieldsProto"]["userpw"]["stringValue"];
                userid = docSnapshot["_fieldsProto"]["userid"]["stringValue"];
                userAccount = docSnapshot["_fieldsProto"]["accountAddress"]["stringValue"]

                if (password == pw){
                    member = {
                        "userid":`${id}`,
                        "password":`${password}`,
                        "userAccount":`${userAccount}`
                    }
                    console.log(`### return code = ${RETURN_CODE['SUCCESS']}`);
                    res(RETURN_CODE['SUCCESS']);
                }
                else{
                    console.log(`### return code = ${RETURN_CODE['PASSWORD_ERR']}`);
                    res(RETURN_CODE['PASSWORD_ERR']);
                }
            }catch(e){
                console.log(`1_moduletest.js userlogin 메서드에서 ${e} 오류발생`);
            }
        },(err)=>{
            console.log(`${err}`);
        })
    });
}

/**
 * 회원가입 함수
 * @param {string} userid 
 * @param {string} userpw 
 * @param {string} username 
 * @param {string} useremail 
 * @param {string} userphone 
 * @param {string} year 
 * @param {string} month 
 * @param {string} day 
 */
async function userSignUp(userid,userpw,username,useremail,userphone,year,month,day) {
    //let accountAddress = await web3.eth.personal.newAccount(userpw);
    let accountAddress = await web3.eth.personal.newAccount(userpw);
    await transferHSC(accountList[0], accountAddress, 100);
    await transferETH(accountList[0], accountAddress, 1000);
    db.collection(DB_COLLECTION["USERS"]).doc(userid).set({
        userid: userid,
        userpw: userpw,
        username: username,
        useremail: useremail,
        userphone: userphone,
        year: year,
        month: month,
        day: day,
        accountAddress: accountAddress,
        accountPassword: userpw
    });
    console.log(`### userSignUp Info`);
    console.log(`userid = ${userid}`);
    console.log(`userpw = ${userpw}`);
    console.log(`username = ${username}`);
    console.log(`useremail = ${useremail}`);
    console.log(`userphone = ${userphone}`);
    console.log(`year.month.day = ${year}.${month}.${day}`);
    console.log(`accountAddress = ${accountAddress}`);
    console.log(`accountPassword = ${accountPassword}`);
    console.log(`### userSignUp Complete`);
}

// 유효성 검사, 회원 관련 함수
/////////////////////////////////////////


/////////////////////////////////////////
// 정보 조회 관련 함수

/**
 * 계정의 HSC 보유값 리턴
 * @param {string} inquiryAddress 조회할 계정 주소
 * @returns {float} ETH 값으로 리턴
 */
 async function balanceInquiry(inquiryAddress) {
    let hsBalanceWei = await hsContract.methods.balanceOf(inquiryAddress).call();
    let hsBalanceEth = web3.utils.fromWei(hsBalanceWei, 'ether');
    console.log(`### hsBalance = ${hsBalanceEth}`);
    return hsBalanceEth;
}

/**
 * DB에서 프랜차이즈 정보를 가져옴
 * @returns {object} 프랜차이즈 정보들 obejct
 */
 async function getFranchise() {
    let franchiseObj = {};
    let ps = await db.collection(DB_COLLECTION['FRANCHISE']).get();
    return new Promise(resolve => {
        ps.forEach(doc => {
            franchiseObj[doc.id] = doc.data();
        });
        resolve(franchiseObj);
    });
}

/**
 * 이용내역 쿼리
 * @param {string} inquiryAddress 조회할 계정 주소
 * @returns {object} 계정주소가 보내거나 받은 정보 객체
 */
 async function getTransactionLog(inquiryAddress) {
    let logObj = {};
    let transactionRef = await db.collection(DB_COLLECTION["TRANSACTION_LOG"]);
    return new Promise(async (resolve) => {
        await transactionRef.where('receiverAddress', 'in', [inquiryAddress])
        .get()
        .then(res => {
            res.forEach(result => {
                logObj[result.id] = result.data();
            })
        }); 
        await transactionRef.where('senderAddress', 'in', [inquiryAddress])
        .get()
        .then(res => {
            res.forEach(result => {
                logObj[result.id] = result.data();
            })
            let keys = Object.keys(logObj);
            logObj = Object.keys(logObj).map(item => logObj[item]);
            logObj = logObj.sort(function (obj1, obj2) {
                let key1 = obj1['transactionTime'];
                let key2 = obj2['transactionTime'];
                return key1 > key2 ? -1 : 1;
            });
            resolve(logObj);
        });
    })
}

/**
 * 모든 유저들의 Balance를 조회
 * @returns {obejct} 모든 유저의 Balance 정보 객체 리턴
 */
 async function getAllUserBalance() {
    let userRank = [];
    let userInfo = {};
    let allUserInfoRef = await db.collection(DB_COLLECTION['USERS']).get();
    allUserInfoRef.forEach(doc => {
        console.log(doc.id, doc.data());
        userInfo[doc.id] = doc.data();
    })

    for(user in userInfo) {
        console.log(userInfo[user]['accountAddress']);
        let balance = await balanceInquiry(userInfo[user]['accountAddress']);
        console.log(balance);
        let tempObj = {
            user:user,
            balance:parseInt(balance)
        }
        userRank.push(tempObj);
    }
    
    return new Promise(resolve => {
        console.log(userRank);
        userRank = userRank.sort((user1, user2) => {
            return user2.balance - user1.balance;
        });
        if(userRank.length > 6) {
            userRank = userRank.slice(0, 6);
        }
        resolve(userRank);
    });
}

/**
 * 가입된 유저 정보를 가져옴
 * @param {string} userId 
 * @returns {object} 유저 정보 객체
 */
async function getUserInfo(userId) {
    let userInfoRef = await db.collection(DB_COLLECTION["USERS"]);
    let snapShot = await userInfoRef.where('userid', '==', userId).get();
    return new Promise(resolve => {
        snapShot.forEach(doc => {
            resolve(doc.data());
        })
    })
}

/**
 * 유저 아이디를 가져오는 함수
 * @param {string} inquiryAddress 
 * @returns 유저 아이디
 */
 async function getUserId(inquiryAddress) {
    let userInfoRef = await db.collection(DB_COLLECTION["USERS"]);
    let snapShot = await userInfoRef.where('accountAddress', '==', inquiryAddress).get();
    return new Promise(resolve => {
            snapShot.forEach(doc => {
            resolve(doc.data().userid);
        })
    })
}

/**
 * 유저 계정 비밀번호를 가져오는 함수
 * @param {string} inquiryAddress 
 * @returns 유저 아이디
 */
 async function getAccountPassword(inquiryAddress) {
    let userInfoRef = await db.collection(DB_COLLECTION["USERS"]);
    let snapShot = await userInfoRef.where('accountAddress', '==', inquiryAddress).get();
    return new Promise(resolve => {
            snapShot.forEach(doc => {
            resolve(doc.data().accountPassword);
        })
    })
}


/**
 * 최근 거래된 계정 정보를 가져옴
 * @param {string} inquiryAddress 
 * @returns {obejct} 계정 정보 객체
 */
 async function getRecentTransferAccount(inquiryAddress) {
    let recentObj = new Map();
    let logObj = await getTransactionLog(inquiryAddress);

    return new Promise(resolve => {
        logObj.forEach(doc => {
            let senderAddress = doc['senderAddress'];
            let receiverAddress = doc['receiverAddress'];
            if(senderAddress == inquiryAddress) {
                recentObj.set(doc['receiverId'], doc['receiverAddress'])
            } else {
                recentObj.set(doc['senderId'], doc['senderAddress'])
            }
        })
        resolve(recentObj);
    })
}


/**
 * 유저의 즐겨찾기 내역 조회
 * @param {string} userId 
 */
async function getUserFaviconList(userId) {
    
}

// 정보 조회 관련 함수
/////////////////////////////////////////

app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

initWeb3();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const login = auth.getAuth();
const db = firestore.getFirestore();
const module1 = require('./router/module1')(
    RETURN_CODE,
    DB_COLLECTION,
    app,
    fs,
    admin,
    moment,
    firestore,
    serviceAccount,
    userSignUp,
    userlogin,
    checkIdDuplicate,
    remittanceCoin,
    paymentCoin,
    balanceInquiry,
    getTransactionLog,
    isIdInDb,
    isPasswordRight,
    getFranchise,
    getUserInfo,
    getAllUserBalance,
    modifyDBItem,
    getRecentTransferAccount,
    addFavicon,
    getFaviconList,
    userAgentModel
    )

app.listen(PORT, () => {
    moment.tz.setDefault('Asia/Seoul');
    console.log(`${PORT}번호로 서버 실행중...`);
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
});
