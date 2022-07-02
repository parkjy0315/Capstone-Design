import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//맨윗부분 로고와 내 지갑 담는 Small Container
import IndexTopSmallContainer from '../components/IndexComponents/IndexTopSmallContainer';

//가운데 코인 잔량 표시 뒷배경 ring 이미지
import IndexMiddleSmallContainer from '../components/IndexComponents/IndexMiddleSmallContainer';
//가운데 코인 잔량표시 텍스트 2개담은 Component
import IndexMiddleCoinAmount from '../components/IndexComponents/IndexMiddleCoinAmount';

//하단 송금/결제버튼
import IndexRemittancePaymentButton from '../components/IndexComponents/IndexRemittancePaymentButton';

//맨 하단 NavList
import IndexBottomNavList from '../components/IndexComponents/IndexBottomNavList';

import axios from 'axios';
//불안한데
import { useIsFocused } from '@react-navigation/native';

//로그무시
import {LogBox} from 'react-native';



const Container = styled.SafeAreaView`
    flex : 1;
    background-color:white;
`;

const SmallContainer = styled.TouchableOpacity`
    position:relative;
    width:87%;
    height:55%;
    margin:0 auto;
    background-color:white;
`;

function Index({navigation,route}) {
    
    console.disableYellowBox = true;

//송금에 즐겨찾기랑 최근거래내역을 띄우기위한 asyncstorage랑 이용을 위한 class 객체
const [account,setAccount] = React.useState('');
class remitttrans{
    transArr = [];
    constructor (username,userAccount){
        this.username = username;
        this.userAccount = userAccount;

        this.transArr.push(username);
        this.transArr.push(userAccount);
    }
}

    var totalArrList = [];
    var keyArrList = [];
    var valArrList = [];
    //최신 거래목록 불러오기
    //axios 통신
    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        
        setAccount(UserInfo["userAccount"]);
        
        return UserInfo["userAccount"];
    })
    .then((userAccount)=>{
        axios({
            method:"POST",
            url: `http://220.67.231.91:80/getRecentTransferAccount`,
            data: {
                userAccount:account
            },
        }).then((res)=>{
            console.log(`입장 후 서버와 연결 성공`);
            keyArrList = Object.keys(res.data);
            valArrList = Object.values(res.data);
            
            for(var i=0;i<keyArrList.length;i++){
                let transpiece = new remitttrans(keyArrList[i],valArrList[i]);
                totalArrList.push(transpiece);
            }

            const remittTransvalues = {
                remittTransvalues : totalArrList
            }
            //여기에서 내 remittance 에서의 최근거래내역 다 뜰수있게 다 저장해놨다.
            AsyncStorage.setItem("remittTrans",JSON.stringify(remittTransvalues), (err) => {
                if(err){
                    return false;
                }else{
                    console.log('이용내역 저장 완료');
                }
            })
        })
        .catch(error=>{
            console.log(`서버와 연결 실패 ${error}`);
            throw new Error(error);
        });
    })                        
    //axios 통신
    //최신 거래목록 불러오기

//송금에 즐겨찾기랑 최근거래내역을 띄우기위한 asyncstorage랑 이용을 위한 class 객체



//빌려온 코드
//클래스 정의
class transaction{
    constructor (senderId,receiverId,transactionTime,receiverAddress,amount,senderAddress,transactionType){
        this.senderId = senderId;
        this.receiverId = receiverId;
        //거래시간
        this.transactionTime = transactionTime;
        //수신자
        this.receiverAddress = receiverAddress;
        //코인갯수
        this.amount = amount;
        //송신자
        this.senderAddress = senderAddress;
        //결제/송금 구분
        this.transactionType = transactionType;
    }
}
//클래스 정의

//로그인 하자마자 그의 이용내역 (거래기록을 가져옴)
var trans = new Array();
    //빌려온 코드


    //빌려온 코드 2
    //가져온 데이터 갯수
    var [dataLength,setDataLength] = React.useState(0);
    //객체도 가져올수있나 테스트

    //거래내역 전부 받아와야함
    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        return UserInfo;
    })
    .then((userInfo)=>{
        const userAccount = JSON.parse(userInfo)['userAccount'];
        axios({
            method:"POST",
            url: `http://220.67.231.91:80/getTransactionLog/${userAccount}`,
        })
        .then((data)=>{
            return data;
        })
        .then((result)=>{
            
            var arrKeys = [];
            //거래번호까지 받아옴
            var Alldata = result["data"];
            //모든 거래 식별번호가 들어감 arrKeys = [1244134,51241242]
            arrKeys = Object.keys(Alldata);
            //console.log(`가져온 길이 : ${arrKeys.length}`);
            setDataLength(arrKeys.length);
            //그 식별번호로 거래배열 하나씩 받아옴 ["transactionTime","receiverAddress","amount","senderAddress"]
            var varif;
            //var varif = Object.values(arrKeys[0]);
            //키값인 숫자들이 몇개나 오는지 결과임
            
            for(var i =0;i<dataLength;i++){
                varif = Alldata[arrKeys[i]];
                let tran = new transaction(varif.senderId,varif.receiverId,varif.transactionTime,varif.receiverAddress,varif.amount,varif.senderAddress,varif.transactionType);
                trans.push(tran);
            }
            //console.log(`배열에 추가됨을 확인 ${trans[0].transactionTime}`);
            return trans;
        })
        .then((resultObj)=>{
            //확실하게 받아오고 async storage에 저장
            AsyncStorage.setItem('UsageHistory',JSON.stringify(resultObj), (err) => {
                if(err){
                    return false;
                }else{
                    console.log('이용내역 저장 완료');
                }
            });

        })
    })
    //빌려온 코드 2
//로그인 하자마자 그의 이용내역 (거래기록을 가져옴)









    //그냥 코인 잔량 받아오는 정형적인 코드
    const [userAccountValue,setUserAccoutValue] = React.useState('');
    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        return UserInfo;
    })
    .then((userInfo)=>{
        const userAccount = JSON.parse(userInfo)['userAccount'];
        
        axios({
            method:"GET",
            url: `http://220.67.231.91:80/getMyBalance/${userAccount}`,
        })
        .then((data)=>{
            return data;
        })
        .then((result)=>{
            var userValance = result["data"]["userValance"];
            setUserAccoutValue(userValance);
        })
    })
    //그냥 코인 잔량 받아오는 정형적인 코드



    const isFocused = useIsFocused(); // isFoucesd Define
    //컴포넌트가 포커싱을 받을시에 리랜더링을 하는 방법

    React.useEffect(() => {
    return () => {
        AsyncStorage.getItem('userinformation', (err, result) => {
            const UserInfo = JSON.parse(result);
            return UserInfo;
        })
        .then((userInfo)=>{
            const userAccount = JSON.parse(userInfo)['userAccount'];
            
            axios({
                method:"GET",
                url: `http://220.67.231.91:80/getMyBalance/${userAccount}`,
            })
            .then((data)=>{
                return data;
            })
            .then((result)=>{
                var userValance = result["data"]["userValance"];
                setUserAccoutValue(userValance);
            })
        })
        //그냥 코인 잔량 받아오는 정형적인 코드
        
    }
    }, [isFocused]);
    //컴포넌트가 포커싱을 받을시에 리랜더링을 하는 방법

    function afterPressRefreshBalance(){
        AsyncStorage.getItem('userinformation', (err, result) => {
            const UserInfo = JSON.parse(result);
            return UserInfo;
        })
        .then((userInfo)=>{
            const userAccount = JSON.parse(userInfo)['userAccount'];
            
            axios({
                method:"GET",
                url: `http://220.67.231.91:80/getMyBalance/${userAccount}`,
            })
            .then((data)=>{
                return data;
            })
            .then((result)=>{
                var userValance = result["data"]["userValance"];
                setUserAccoutValue(userValance);
            })
        })
        //그냥 코인 잔량 받아오는 정형적인 코드
    }


    return(
        <Container>
            {/*맨상단 로고와 내 지갑 텍스트 */}
            <IndexTopSmallContainer/>
            
            {/*중간부분 코인잔량표시와 이미지 */}
            <SmallContainer onPress={()=>{afterPressRefreshBalance()}}>
                <IndexMiddleSmallContainer/>
                <IndexMiddleCoinAmount text={userAccountValue}/>
            </SmallContainer>

            {/*하단 송금,결제 버튼 */}
            <IndexRemittancePaymentButton/>
            
            <IndexBottomNavList/>

        </Container>
    );
};

export default Index;