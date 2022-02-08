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
//import RegistGenderPicker from '../components/RegistComponents/RegistGenderPicker';
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { StyleSheet,Text } from 'react-native';

import SmallContainerForMiddlePicker from '../components/RegistComponents/SmallContainerForMiddlePicker';

import RegistDatePicker from '../components/RegistComponents/RegistDatePicker';
import RegistConstraintArea from '../components/RegistComponents/RegistConstraintArea';

import ConstraintText from '../components/RegistComponents/ConstraintText';



function Regist({navigation}){
    const [userid,setUserid] = React.useState('');
    const [userpw,setUserpw] = React.useState('');
    const [userWalletDist,setUserWalletDist] = React.useState('');

    const store = async ()=>{
        if(userid === '') return;
        if(userpw === '') return;
        if(userWalletDist === '') return;

        let list = await AsyncStorage.getItem( userid );
        if(list === null){
            list = [];
        }else{
            list = JSON.parse(list);
        }

        list.push({
            userid,
            userpw,
            userWalletDist
        });
        await AsyncStorage.setItem(userid,JSON.stringify(list));
        navigation.goBack();
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
                    text='   PW확인 :'
                    value = {userWalletDist}
                    onChangeText = {value => setUserWalletDist(value)}
                    />
                </SmallContainer>

                {/*여기 부터 Button을 Radio로 변경필요 */}
                <SmallContainer>
                    <RegistInput 
                    text='   이름 :'
                    value = {userid}
                    onChangeText = {value => setUserid(value)}
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
                    value = {userWalletDist}
                    onChangeText = {value => setUserWalletDist(value)}
                    />
                </SmallContainer>


                <SmallContainer>
                    <RegistInput 
                    text='   phone :'
                    value = {userid}
                    onChangeText = {value => setUserid(value)}
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
