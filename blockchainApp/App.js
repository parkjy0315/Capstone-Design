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

import ExpoCamera from './expoCamera/ExpoCamera';
import { Camera } from 'expo-camera';

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{title:'로그인'}}/>
        <Stack.Screen name="Regist" component={Regist} options={{title:'회원가입'}}/>
        <Stack.Screen name="PaymentOne" component={PaymentOne} options={{title:'결제 화면1'}}/>
        <Stack.Screen name="PaymentOneTwo" component={PaymentOneTwo} options={{title:'결제 화면 1-2'}}/>
        <Stack.Screen name="PaymentOneThree" component={PaymentOneThree} options={{title:'결제 화면 1-3'}}/>
        <Stack.Screen name="RemittanceOne" component={RemittanceOne} options={{title:'송금 화면 1'}}/>
        <Stack.Screen name="RemittanceOneTwo" component={RemittanceOneTwo} options={{title:'송금 화면 2'}}/>
        <Stack.Screen name="RemittanceOneThree" component={RemittanceOneThree} options={{title:'송금 화면 3'}}/>
        <Stack.Screen name="Index" component={Index} options={{title:'메인 화면'}}/>

        <Stack.Screen name="Notice" component={Notice} options={{title:'공지 화면'}}/>
        <Stack.Screen name="Franchisee" component={Franchisee} options={{title:'가맹점'}}/>
        <Stack.Screen name="UsageHistory" component={UsageHistory} options={{title:'이용내역'}}/>

        <Stack.Screen name="UserInfo" component={UserInfo} options={{title:'유저 정보 화면'}}/>
        <Stack.Screen name="ExpoCamera" component={ExpoCamera} options={{title:'QR코드 스캔'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;