import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import Index from './pages/Index';
import PaymentOne from './pages/PaymentOne';
import PaymentOneTwo from './pages/PaymentOneTwo';
import PaymentOneThree from './pages/PaymentOneThree';
import RemittanceOne from './pages/RemittanceOne';
import RemittanceOneTwo from './pages/RemittanceOneTwo'
import RemittanceOneThree from './pages/RemittanceOneThree'
import UserInfo from './pages/UserInfo';
import Regist from './pages/Regist';
import Login from './pages/Login';
import Notice from './pages/Notice';
import Franchisee from './pages/Franchisee';
import UsageHistory from './pages/UsageHistory';
import TransactionAni from './pages/TransactionAni';
import LoginAni from './pages/LoginAni';
import ModifyMyInfo from './pages/ModifyMyInfo';
import ExpoCamera from './expoCamera/ExpoCamera';


function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{title:'로그인', headerShown:false}}/>
        <Stack.Screen name="Regist" component={Regist} options={{title:'회원가입', headerShown:false}}/>
        <Stack.Screen name="LoginAni" component={LoginAni} options={{title:'로그인 중', headerShown:false}}/>
        <Stack.Screen name="PaymentOne" component={PaymentOne} options={{title:'결제 화면1', headerShown:false}}/>
        <Stack.Screen name="PaymentOneTwo" component={PaymentOneTwo} options={{title:'결제 화면 1-2', headerShown:false}}/>
        <Stack.Screen name="PaymentOneThree" component={PaymentOneThree} options={{title:'결제 화면 1-3', headerShown:false}}/>
        <Stack.Screen name="RemittanceOne" component={RemittanceOne} options={{title:'송금 화면 1', headerShown:false}}/>
        <Stack.Screen name="RemittanceOneTwo" component={RemittanceOneTwo} options={{title:'송금 화면 2', headerShown:false}}/>
        <Stack.Screen name="RemittanceOneThree" component={RemittanceOneThree} options={{title:'송금 화면 3', headerShown:false}}/>
        <Stack.Screen name="TransactionAni" component={TransactionAni} options={{title:'트랜잭션중', headerShown:false}}/>
        <Stack.Screen name="Index" component={Index} options={{title:'메인 화면', headerShown:false}}/>

        {/* 새로 추가하는 navigation */}
        <Stack.Screen name="ModifyMyInfo" component={ModifyMyInfo} options={{title:'정보 수정', headerShown:false}}/>


        <Stack.Screen name="Notice" component={Notice} options={{title:'MyPage', headerShown:false}}/>
        <Stack.Screen name="Franchisee" component={Franchisee} options={{title:'가맹점', headerShown:false}}/>
        <Stack.Screen name="UsageHistory" component={UsageHistory} options={{title:'이용내역', headerShown:false}}/>

        <Stack.Screen name="UserInfo" component={UserInfo} options={{title:'유저 정보 화면', headerShown:false}}/>
        <Stack.Screen name="ExpoCamera" component={ExpoCamera} options={{title:'QR코드 스캔', headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;