import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import PaymentOneContainer from '../components/PaymentOneComponents/PaymentOneContainer';
import PaymentOnePageButton from '../components/PaymentOneComponents/PaymentOnePageButton';
import PaymentOneContents from '../components/PaymentOneComponents/PaymentOneContents';
//qr코드 영역
import QRarea from '../components/PaymentOneComponents/QRarea';
//import Text from '../components/Container';
//import UserInfo from './UserInfo';

//QRimg 가져오기
import {StyleSheet,Image} from 'react-native';
import QRCode from '../image/QRCode.png';


//expo-camera 가져오기
//import { Camera } from 'expo-camera';
//import ExpoCamera from '../expoCamera/ExpoCamera';
//import ExpoCamera from '../expoCamera/ExpoCamera';


//index.js 에 쓰인 Text
const Text = styled.Text`
    font-size : 20px;
    line-height:20px;
`;

function PaymentOne({navigation,route}){
    //const userid = route.params.userid;
    //const userWalletDist = route.params.userWalletDist;

    return(
        <PaymentOneContainer>
            <PaymentOneContents>
                {/*
                    여기에 QR코드 띄워주는 div넣어야함
                    조건 1. Contents 내부를 80% 채우고
                    margin이나 padding이 여백을 좀 잡게
                    해줘야 한다. 
                */}
                {/* QRarea가 눌리면 QR을 찍게 카메라가 바로 켜지는 */}
                <QRarea onPress={()=>navigation.navigate('ExpoCamera')}>
                    {/* 이 내부에 qr이미지가 들어가야함 */}
                    <Image source={QRCode} style={styles.image}/>
                </QRarea>
                
            </PaymentOneContents>
            
            <PaymentOnePageButton onPress={()=>navigation.navigate('UserInfo',{id : userid, wd : userWalletDist})}>내 정보</PaymentOnePageButton>
        </PaymentOneContainer>
    );
};
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
    }
});

export default PaymentOne;