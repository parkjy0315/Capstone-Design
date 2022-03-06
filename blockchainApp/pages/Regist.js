import React from 'react';
import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import RegistContainer from '../components/RegistComponents/RegistContainer';
import RegistContents from '../components/RegistComponents/RegistContents';
import RegistPageButton from '../components/RegistComponents/RegistPageButton';
//맨위에 '회원가입' 텍스트 컴포넌트
import RegistTopText from '../components/RegistComponents/RegistTopText';
import RegistTopSmallContainer from '../components/RegistComponents/RegistTopSmallContainer';
import RegistInput from '../components/RegistComponents/RegistInput';

//영역잡기용 SmallContainer
import SmallContainer from '../components/RegistComponents/SmallContainer';

//따로만든 회원가입 버튼
import RegistButton from '../components/RegistComponents/RegistButton';

//따로만든 BottomButton용 컴포넌트
import SmallContainerForBottomButton from '../components/RegistComponents/SmallContainerForBottomButton';

//Picker 실험 보류


import SmallContainerForMiddlePicker from '../components/RegistComponents/SmallContainerForMiddlePicker';

import RegistDatePicker from '../components/RegistComponents/RegistDatePicker';
import RegistConstraintArea from '../components/RegistComponents/RegistConstraintArea';

import ConstraintText from '../components/RegistComponents/ConstraintText';

import axios from 'axios';
import qs from 'qs';

function Regist({navigation}){
    
    const [userid,setUserid] = React.useState('');
    const [userpw,setUserpw] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [useremail,setUseremail] = React.useState('');
    const [userphone,setUserphone] = React.useState('');
    //
    const [userWalletDist,setUserWalletDist] = React.useState('');
    
    const store = async ()=>{
        const name = username;
        const password = userpw;
        const gender = '여';
        const userWalletDist = userWalletDist;
        
        
        let list;
        if(userid === '') return;
        if(userpw === '') return;
        if(username === '') return;
        if(useremail === '') return;
        if(userphone === '') return;
        
        if(userWalletDist === '') return;
        //나중에 session 관리할떄를 위해 남겨둔 코드
        //let list = await AsyncStorage.getItem( userid );

        //여기에서 joinMember/:userid 로 보낼 axios 작성
        
        console.log(`여기까지옴 밝은`);
        
        const data = {
            'password':userpw,
            'name':username,
            'useremail':useremail,
            'userphone':userphone,
            'userWalletDist':userWalletDist
        }
        
        console.log(`여기까지옴 별`);
        //axios 통신
        axios({
            method:"POST",
            url: `http://127.0.0.1:3000/joinMember/${userid}`,
            data: qs.stringify(data),
        }).then((res)=>{
            console.log(data);
            console.log(`서버와 연결 성공`);
            navigation.goBack();
        }).catch(error=>{
            console.log(`서버와 연결 실패 ${error}`);
            throw new Error(error);
        });
        //axios 통신

        console.log(`여기까지옴 별`);

        //여기에서 joinMember/:userid 로 보낼 axios 작성 
    }

    return(


        <RegistContainer>
            
            
            <RegistTopSmallContainer>
                <RegistTopText>회원가입</RegistTopText>
            </RegistTopSmallContainer>


            <RegistContents>
                {/* small container은 input,button 2개씩 들어가는곳만 */}
                <SmallContainer>
                    <RegistInput
                    text='   ID :'
                    value = {userid}
                    onChangeText = {value => setUserid(value)}
                    />

                    <RegistPageButton text='확인'></RegistPageButton>
                </SmallContainer>
                
                
                <SmallContainer>
                    <RegistInput
                    text='   PW :'
                    value = {userpw}
                    onChangeText = {value => setUserpw(value)}
                    />
                </SmallContainer>
                
                
                <SmallContainer>
                    <RegistInput
                    text='   지갑주소 :'
                    value = {userWalletDist}
                    onChangeText = {value => setUserWalletDist(value)}
                    //onChangeText = {value => setUserpw(value)}
                    />
                </SmallContainer>

                {/*여기 부터 Button을 Radio로 변경필요 */}
                <SmallContainer>
                    <RegistInput 
                    text='   이름 :'
                    value = {username}
                    onChangeText = {value => setUsername(value)}
                    />
                    {/* 남여 선택버튼을 터치만으로 변경 가능하게 해도 될지 여부 상의필요 */}
                    <RegistPageButton text='남  ▼'></RegistPageButton>
                </SmallContainer>
                
                {/*원래 picker 제작하던 자리*/}    


                {/* middle Container 따로 제작 */}
                <SmallContainerForMiddlePicker>
                    <RegistDatePicker text='1970  ▼'></RegistDatePicker>
                    <RegistDatePicker text='01  ▼'></RegistDatePicker>
                    <RegistDatePicker text='01  ▼'></RegistDatePicker>
                </SmallContainerForMiddlePicker>


                
                <SmallContainer>
                    <RegistInput
                    text='   email :'
                    value = {useremail}
                    //value = {userWalletDist}
                    //onChangeText = {value => setUserWalletDist(value)}
                    onChangeText = {value => setUseremail(value)}
                    />
                </SmallContainer>


                <SmallContainer>
                    <RegistInput 
                    text='   phone :'
                    value = {userphone}
                    onChangeText = {value => setUserphone(value)}
                    />

                    <RegistPageButton text='확인'></RegistPageButton>
                </SmallContainer>


                <RegistConstraintArea>
                    <ConstraintText>회원가입 시 개인정보제공 동의로 간주함.</ConstraintText>
                </RegistConstraintArea>



            </RegistContents>
            

            <SmallContainerForBottomButton>
                <RegistPageButton onPress={()=>{navigation.navigate('Login')}} text='취소'></RegistPageButton>
                <RegistButton onPress={()=>{store()}} text='가입'></RegistButton>
            </SmallContainerForBottomButton>

            


        </RegistContainer>
    );  
};
export default Regist;
