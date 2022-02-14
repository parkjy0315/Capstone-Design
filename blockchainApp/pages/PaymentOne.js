import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

import ExpoCamera from '../expoCamera/ExpoCamera';

import PaymentOneContainer from '../components/PaymentOneComponents/PaymentOneContainer';
import PaymentOneTopSmallContainer from '../components/PaymentOneComponents/PaymentOneTopSmallContainer';
import PaymentOneMiddleText from '../components/PaymentOneComponents/PaymentOneMiddleText';

import PaymentOneBottomMyInfo from '../components/PaymentOneComponents/PaymentOneBottomMyInfo';

//expo-camera 가져오기
//import { Camera } from 'expo-camera';
//import ExpoCamera from '../expoCamera/ExpoCamera';
//import ExpoCamera from '../expoCamera/ExpoCamera';


//index.js 에 쓰인 Text
const Text = styled.Text`
    font-size : 20px;
    line-height:20px;
`;

//이부분은 PaymentOneTwo를 보기 위해 visible:false로 테두리 안에 QR코드를 스캔해주세요
//바로 밑부분에 놓은 컴포넌트
const GotoPaymentOneTwo = styled.TouchableOpacity`
    background-color:yellow;
    width:10%;
    height:5%;
    margin:0 auto;
`;

function PaymentOne({navigation}){
    //const userid = route.params.userid;
    //const userWalletDist = route.params.userWalletDist;

    return(
        <PaymentOneContainer>

            <PaymentOneTopSmallContainer/>

                
                <ExpoCamera/>

            <PaymentOneMiddleText/>
            
            {/*PaymentOneTwo로 가기위한 컴포넌트 나중에 지워야함 */}
            <GotoPaymentOneTwo onPress={()=>navigation.navigate('PaymentOneTwo')}/>

            <PaymentOneBottomMyInfo/>

        </PaymentOneContainer>
    );
};


export default PaymentOne;