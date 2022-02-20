import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import LoginContents from '../components/LoginComponents/LoginContents';
import LoginPageButton from '../components/LoginComponents/LoginPageButton';

//로고부분 
import LoginPageLogo from '../components/LoginComponents/LoginPageLogo';
import LoginIdAndPw from '../components/LoginComponents/LoginIdAndPw';

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
    margin-top : 30px;
    margin-bottom : 35px;
`;

function Login({navigation}){
    const [id,setUserid] = React.useState('');
    const [pw,setUserpw] = React.useState('');

    const loginOk = async ()=>{
        if( id === '') return;
        if( pw === '') return;
        let list = await AsyncStorage.getItem(id);
        //이부분 조심
        if(list === null){
            
            return;
        }else{
            let userinfo = JSON.parse(list);
            console.log(userinfo);
            const db_id = userinfo[0].userid;
            const db_pw = userinfo[0].userpw;
            const wald = userinfo[0].userWalletDist;
            //{_.sortBy(list,'userid').map(item => {
                if(db_id === id && db_pw === pw){
                    navigation.navigate('Index',{userid : db_id,userWalletDist : wald});
                    //console.log(`tlist : ${list}`);
                    
                }else{
                    
                }
        //})}
        
        }//else끝
    
        //이부분 조심
        
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


        </LoginContents>
    </LoginContainer>
    );
};


export default Login;