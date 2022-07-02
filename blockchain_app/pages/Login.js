import React from 'react';
import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import _ from 'lodash';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import LoginContents from '../components/LoginComponents/LoginContents';
import LoginPageButton from '../components/LoginComponents/LoginPageButton';
import { Alert } from "react-native";
//로고부분 
import LoginPageLogo from '../components/LoginComponents/LoginPageLogo';
import LoginIdAndPw from '../components/LoginComponents/LoginIdAndPw';
import BlockForPreventAvoding from '../components/LoginComponents/BlockForPreventAvoding';
import axios from 'axios';


import {Platform,StyleSheet} from 'react-native';

const Label = styled.Text`
    font-size : 20px;
    font-weight : bold;
    margin-bottom:12px;
`;

const Input = styled.TextInput`
    width: 75%;
    
    margin:0 auto;
    background-color:white;
    border-radius : 8px;
    border : 1px solid #666666;
    padding: 4px;
    font-size:20px;
    margin-bottom:12px;  
`;

const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                //shadowColor : '#95B3D7',
                shadowColor : '#95B3D7',
                shadowOffset: {width:0,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});


//배치용 box
const SmallContainer = styled.View`
    margin-top : 60px;
    margin-bottom : 35px;
`;

function Login({navigation}){
    console.disableYellowBox = true;
    const [id,setUserid] = React.useState('');
    const [pw,setUserpw] = React.useState('');

    const loginOk = async ()=>{
        if( id === '') return;
        if( pw === '') return;
        let list;
        
        //220.67.231.91:80
        axios({
            method:"GET",
            url: `http://220.67.231.91:80/getMember/${id}/${pw}`,
        }).then((data)=>{
            return data;
        }).then((res)=>{
            list = res.data;
            console.log('뭐가뜨지?\n');
            console.log(list);
            console.log("\n");
            if(list == '202'){
                //작업중
                //alert
                Alert.alert(
                    "로그인실패",
                    "로그인 정보가 틀립니다",
                    [
                        {
                            text: "확인",
                            onPress: () => console.log('사용불가능'),
                            style:"cancel"
                        }
                    ],
                    { cancelable: false}
                );
                //alert
                return false;
            }else if(list == '204'){
                 //alert
                 Alert.alert(
                    "로그인실패",
                    "로그인 정보가 틀립니다",
                    [
                        {
                            text: "확인",
                            onPress: () => console.log('사용불가능'),
                            style:"cancel"
                        }
                    ],
                    { cancelable: false}
                );
                //alert
                return false;
            }
            
            //이부분 조심
            let userinfo = list;
            const db_id = id;
            const db_pw = userinfo["userpw"];
            const db_userAccount = userinfo["accountAddress"];
            const db_userEmail = userinfo["useremail"];
            const db_userPhone = userinfo["userphone"];
            const db_userName = userinfo["username"];
            
            return userinfo;
        }).then((userInfo)=>{
            const db_id = userInfo["userid"];
            const db_pw = userInfo["userpw"];
            const db_userEmail = userInfo["useremail"];
            const db_userPhone = userInfo["userphone"];
            const db_userName = userInfo["username"];
            const db_userAccount = userInfo["accountAddress"];
            AsyncStorage.setItem('userinformation',JSON.stringify({'userid':db_id,'userpw': db_pw,'useremail':db_userEmail,'userphone':db_userPhone ,'userAccount' : db_userAccount,'username':db_userName}), (err) => {
                if(err){
                    return false;
                }else{
                    console.log('유저정보 저장 완료');
                }
            });
            return userInfo;
        }).then((userInfo)=>{
            
            const db_id = userInfo["userid"];
            const db_pw = userInfo["userpw"];
            
            if(db_id === id && db_pw === pw){
                navigation.navigate('LoginAni',{userid : db_id});       
            }

        })
    }
    return(
    <LoginContainer>
        <LoginContents>
            {/* 로고 넣는자리 */}
            <LoginPageLogo/>

            <SmallContainer>
            <Input 
                style={styles.shadow}
                placeholder={'   ID :'}
                value={id}
                onChangeText = {value =>setUserid(value)}
            />
            <Input 
                secureTextEntry={true}
                style={styles.shadow}
                placeholder={'   PW :'}
                value={pw}
                onChangeText = {value =>setUserpw(value)}
            />
            </SmallContainer>

            <LoginPageButton onPress={()=>loginOk()}>로그인</LoginPageButton>
            <LoginPageButton onPress={()=>navigation.navigate('Regist')}>회원가입</LoginPageButton>

            <SmallContainer>
                <LoginIdAndPw/>
            </SmallContainer>


            <BlockForPreventAvoding/>
        </LoginContents>
    </LoginContainer>
    );
};


export default Login;