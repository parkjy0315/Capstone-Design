const { suppressDeprecationWarnings } = require("moment");

module.exports = (
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
    ) => {
        const SUCCESS_CODE = "SUCCESS_CODE";

        /**
         * 회원가입
         * @method post
         * @param {string} userid
         * @param {string} userpw
         * @param {string} username
         * @param {string} useremail
         * @param {string} userphone
         * @param {string} year
         * @param {string} month
         * @param {string} day
         */
        app.post('/joinMember/:userid',(req,res)=>{
            //요청온 컴퓨터의 사양
            userAgentModel.printUserAgent(req.header('user-agent'),"/joinMember/:userid");

            const userid = req.params.userid;
            const userpw = req.body["password"];
            const username = req.body["name"];
            const useremail = req.body["useremail"];
            const userphone = req.body["userphone"];
            const year = req.body["year"];
            const month = req.body["month"];
            const day = req.body["day"];

            console.log(`### /joinMember/${userid} : data`);
            console.log(`userid = ${userid}`);
            console.log(`userpw = ${userpw}`);
            console.log(`username = ${username}`);
            console.log(`userphone = ${userphone}`);
            console.log(`YY.MM.DD = ${year}.${month}.${day}`);

            userSignUp(userid,userpw,username,useremail,userphone,year,month,day);
            
            const result = {};
            result["success"] = 200
            result["msg"] = "join success";
            res.json(result);
        });

        /**
         * 회원 정보 불러오기
         * @method get
         * @param {string} userid
         * @param {string} userpw
         */
        app.get('/getMember/:userid/:userpw', async (req,res)=>{
            userAgentModel.printUserAgent(req.header('user-agent'),"/getMember/:userid/:userpw");
        
            const userid = req.params.userid;
            const userpw = req.params.userpw;

            if(await isIdInDb(userid)) {
                const userInfo = await getUserInfo(userid);    
                console.log(`### /getMember/${userid}/${userpw} : data`);
                console.log(`userid = ${userid}`);
                console.log(`userpw = ${userpw}`);
                console.log(`userInfo = ${userInfo}`);
        
                userlogin(userid,userpw).then((member)=>{
                    console.log(`member = ${member}`);  
                    member == 100 ? res.json(userInfo) : res.json(member);
                });
            } else{
                res.json(RETURN_CODE['NONE_ID']);
            }
            
            

        });

        /**
         * 아이디 중복 검사
         * @method get
         * @param {string} userid
         */
        app.get('/checkIdDuplicate/:userid',(req,res)=>{
            userAgentModel.printUserAgent(req.header('user-agent'),"/checkIdDuplicate/:userid");
            const userid = req.params.userid;

            console.log(`### /checkIdDuplicate/${userid} : data`);
            console.log(`userid = ${userid}`);
            
            const idCheck = async () => {
                var checkUserid = await checkIdDuplicate(userid);
                console.log(`checkUserId res = ${checkUserid}`);
                
                if(checkUserid === '200'){
                    //중복이 없을때 (회원가입 해도될때) 200을 보냄
                    res.json('200');
                }else{
                    //중복이 있을때 (회원가입 하면 안될때) 100을 보냄
                    res.json('100');
                }   
            }
            idCheck(); 
        })

        /**
         * 잔액 조회
         * @method get
         * @param {string} userAccoun
         */
        app.get('/getMyBalance/:userAccount',(req,res)=>{
            userAgentModel.printUserAgent(req.header('user-agent'),"/getMyBalance/:userAccount");
            
            const userAccount = req.params.userAccount;
            
            console.log(`### /getMyBalance/${userAccount} : data`);
            console.log(`userAccount = ${userAccount}`);

            var value;
            const getBalance = async ()=>{
                value =  await balanceInquiry(userAccount);
                const userValance = {
                    'userValance': value,
                }
                res.json(userValance);
            }
            getBalance();
        })

        /**
         * 송금
         * @method post
         * @param {string} userId 전송 유저 아이디
         * @param {string} userPassword 전송 유저 패스워드
         * @param {string} senderAddress 전송측 주소
         * @param {string} receiverAddress 송신측 주소
         * @param {int} amount 보낼 금액
         * @returns {object} 성공 코드 
         * (성공: 100, 송신측 주소 없음: 200, 잔액부족: 201, 비밀번호 오류: 202)
         */
        app.post('/hscRemittance', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/hscRemittance");
            
            const userId = req.body["userId"];
            const userPassword = req.body["userPassword"];
            const senderAddress = req.body["senderAddress"];
            const receiverAddress = req.body["receiverAddress"];
            const amount = req.body["amount"];
            const result = {};

            console.log(`### /hscRemittance : data`);
            console.log(`userId = ${userId}`);
            console.log(`userPassword = ${userPassword}`);
            console.log(`senderAddress = ${senderAddress}`);
            console.log(`receiverAddress = ${receiverAddress}`);
            console.log(`amount = ${amount}`);
            
            if(await isPasswordRight(userId, userPassword)) {
                result[SUCCESS_CODE] = await remittanceCoin(senderAddress, receiverAddress, amount);
            } else {
                result[SUCCESS_CODE] = RETURN_CODE['PASSWORD_ERR'];
            }
            console.log(`result = ${result}`);
            res.json(result);
        })

        /**
         * 결제
         * @method post
         * @param {string} userId 전송 유저 아이디
         * @param {string} userPassword 전송 유저 패스워드
         * @param {string} senderAddress 전송측 주소
         * @param {string} receiverAddress 송신측 주소
         * @param {int} amount 보낼 금액
         * @returns {object} 성공 코드 
         * (성공: 100, 송신측 주소 없음: 200, 잔액부족: 201, 비밀번호 오류: 202)
         */
        app.post('/hscPayment', (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/hscPayment");

            const userId = req.body["userId"];
            const userPassword = req.body["userPassword"];
            console.log(typeof(userPassword), userPassword);
            const senderAddress = req.body["senderAddress"];
            const receiverAddress = req.body["receiverAddress"];
            const amount = req.body["amount"];
            const result = {};

            console.log(`### /hscPayment : data`);
            console.log(`userId = ${userId}`);
            console.log(`userPassword = ${userPassword}`);
            console.log(`senderAddress = ${senderAddress}`);
            console.log(`receiverAddress = ${receiverAddress}`);
            console.log(`amount = ${amount}`);

            isPasswordRight(userId, userPassword).then(isSucc => {
                if(isSucc == true) {
                    paymentCoin(senderAddress, receiverAddress, amount).then(code => {
                        result['SUCCESS_CODE'] = code;
                        console.log(`result = ${result}`);
                        res.json(result);
                    })              
                } else {
                    result[SUCCESS_CODE] = RETURN_CODE['PASSWORD_ERR'];
                    console.log(`result = ${result}`);
                    res.json(result);
                }
            });
        })

        /**
         * GPS 정보 가져오기 매핑 getGpsInfo
         * @method get
         * @returns {object} 
         */
        app.get('/getGpsInfo', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/getGpsInfo");

            console.log(`### /getGpsInfo : data`);

            const result = await getFranchise();
            console.log(`result = ${result}`);
            res.json(result);
        })
        
        /**
         * 이용내역 불러오기
         * @method post
         * @returns {object} 
         */
        app.post('/getTransactionLog/:userAccount', async (req,res)=>{
            userAgentModel.printUserAgent(req.header('user-agent'),"/getTransactionLog/:userAccount");
            const userAccount = req.params.userAccount;
            console.log(`### /getTransactionLog/${userAccount} : data`);
            console.log(`userAccount = ${userAccount}`);

            let logObj = await getTransactionLog(userAccount);
            console.log(`logObj = ${logObj}`);
            res.json(logObj);
        })

        /**
         * 개인 정보 수정
         * @method post 
         */
        app.post('/ModifyMyInfo/:userId', async (req,res)=>{
            userAgentModel.printUserAgent(req.header('user-agent'),"/ModifyMyInfo/:userId");
            const userid = req.body["userid"];
            const userpw = req.body["password"];
            const username = req.body["username"];
            const useremail = req.body["useremail"];
            const userphone = req.body["userphone"];
            const userOriginPw = req.body['myOriginPw'];

            console.log(`### /ModifyMyInfo/${userid} : data`);
            console.log(`userid = ${userid}`);
            console.log(`userpw = ${userpw}`);
            console.log(`username = ${username}`);
            console.log(`useremail = ${useremail}`);
            console.log(`userphone = ${userphone}`);
            console.log(`userOriginPw = ${userOriginPw}`);

            let modifiedInfo = {
                userpw:userpw,
                username:username,
                useremail:useremail,
                userphone:userphone,
            };
            let result

            if(await isPasswordRight(userid, userOriginPw)) {
                result = await modifyDBItem(DB_COLLECTION["USERS"], userid, modifiedInfo);
            } else {
                result = RETURN_CODE['PASSWORD_ERR'];
            }
            console.log(`result = ${result}`);
            res.json(result);
        })

        /**
         * 유저 랭킹 가져오기
         * @method get
         * @returns {object} 
         */
         app.get('/getUserRank', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/getUserRank");

            console.log(`### /getUserRank/ : data`);
            const result = await getAllUserBalance();
            console.log(`result = ${result}`);
            res.json(result);
        })

        /**
         * 최근 거래한 계정 정보 가져오기
         * @method post
         * @param {string} userAccount
         * @returns {object} 
         */
         app.post('/getRecentTransferAccount', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/getRecentTransferAccount");
            const userAccount = req.body['userAccount'];

            console.log(`### /getRecentTransferAccount/ : data`);
            console.log(`userAccount = ${userAccount}`);

            let result = await getRecentTransferAccount(userAccount);
            result = Object.fromEntries(result)
            console.log(`result =  ${result}`);
            res.json(result);
        })


        /**
         * 즐겨찾기 리스트 가져오기
         * @method post
         * @param {string} userId
         * @returns {object} 
         */
         app.post('/getFaviconList', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/getFaviconList");
            const userId = req.body['userId'];
            
            console.log(`### /getFaviconList : data`);
            console.log(`userId = ${userId}`);

            let result = await getFaviconList(userId);
            console.log(`result =  ${result}`);
            res.json(result);
        })

        /**
         * 즐겨찾기 추가
         * @method post
         * @param {string} userId
         * @param {string} faviconId
         * @param {string} faviconAddress
         */
         app.post('/addFavicon', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/addFavicon");
            const userId = req.body['userId'];
            const faviconId = req.body['faviconId'];
            const faviconAddress = req.body['faviconAddress'];

            console.log(`### /addFavicon/ : data`);
            console.log(`userId = ${userId}`);
            console.log(`faviconId = ${faviconId}`);
            console.log(`faviconAddress = ${faviconAddress}`);

            let faviconObject = {
                owner: userId,
                userId: faviconId,
                userAddress: faviconAddress,  
            }

            let result = await addFavicon(userId, faviconObject);
            console.log(`result = ${result}`);
            res.json(result);
        })
        
        /**
         * 즐겨찾기 삭제
         * @method post
         * @param {string} userId
         * @param {string} faviconName
         */
         app.post('/removeFavicon', async (req, res)=> {
            userAgentModel.printUserAgent(req.header('user-agent'),"/removeFavicon");
            
            res.json(result);
        })
}