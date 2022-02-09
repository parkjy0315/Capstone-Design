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

function PaymentOne(){
    //const userid = route.params.userid;
    //const userWalletDist = route.params.userWalletDist;

    return(
        <PaymentOneContainer>

            <PaymentOneTopSmallContainer/>

                
                <ExpoCamera/>

            <PaymentOneMiddleText/>
            
            <PaymentOneBottomMyInfo/>

        </PaymentOneContainer>
    );
};


export default PaymentOne;