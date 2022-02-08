import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import Index from './pages/Index';
import PaymentOne from './pages/PaymentOne';
import UserInfo from './pages/UserInfo';
import Regist from './pages/Regist';
import Login from './pages/Login';

import ExpoCamera from './expoCamera/ExpoCamera';
import { Camera } from 'expo-camera';

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{title:'로그인'}}/>
        <Stack.Screen name="Regist" component={Regist} options={{title:'회원가입'}}/>
        <Stack.Screen name="PaymentOne" component={PaymentOne} options={{title:'결제 화면1'}}/>
        <Stack.Screen name="Index" component={Index} options={{title:'메인 화면'}}/>
        <Stack.Screen name="UserInfo" component={UserInfo} options={{title:'유저 정보 화면'}}/>
        <Stack.Screen name="ExpoCamera" component={ExpoCamera} options={{title:'QR코드 스캔'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;