import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import ModifyMyInfoContainer from '../components/ModifyMyInfoComponents/ModifyMyInfoContainer';
import ModifyMyInfoContents from '../components/ModifyMyInfoComponents/ModifyMyInfoContents';
import ModifyMyInfoPageButton from '../components/ModifyMyInfoComponents/ModifyMyInfoPageButton';
//맨위에 '회원가입' 텍스트 컴포넌트
import ModifyMyInfoTopText from '../components/ModifyMyInfoComponents/ModifyMyInfoTopText';
import ModifyMyInfoTopSmallContainer from '../components/ModifyMyInfoComponents/ModifyMyInfoTopSmallContainer';
import ModifyMyInfoInput from '../components/ModifyMyInfoComponents/ModifyMyInfoInput';

import ModifyMyInfoIdInput from '../components/ModifyMyInfoComponents/ModifyMyInfoIdInput';
//어쩔수없는 블록 (avoding을 막기위한)
import BlockForPreventAvoding from '../components/ModifyMyInfoComponents/BlockForPreventAvoding';

//영역잡기용 SmallContainer
import SmallContainer from '../components/ModifyMyInfoComponents/SmallContainer';

//따로만든 회원가입 버튼
import ModifyMyInfoButton from '../components/ModifyMyInfoComponents/ModifyMyInfoButton';

//따로만든 BottomButton용 컴포넌트
import SmallContainerForBottomButton from '../components/ModifyMyInfoComponents/SmallContainerForBottomButton';

//Picker 실험 보류
import ModifyMyInfoConstraintArea from '../components/ModifyMyInfoComponents/ModifyMyInfoConstraintArea';

import ConstraintText from '../components/ModifyMyInfoComponents/ConstraintText';

import axios from 'axios';
import qs from 'qs';

//alert를 띄우기위한 import 
import { Alert } from "react-native";



function ModifyMyInfo({navigation}){
    console.disableYellowBox = true;
    var [userInfo,setUserInfo] = React.useState('');
    const [userid,setUserid] = React.useState('');
    const [userpw,setUserpw] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [useremail,setUseremail] = React.useState('');
    const [userphone,setUserphone] = React.useState('');

    const [userpw2,setUserpw2] = React.useState('');
    const [username2,setUsername2] = React.useState('');
    const [useremail2,setUseremail2] = React.useState('');
    const [userphone2,setUserphone2] = React.useState('');


    const [myOriginPw,setMyOriginPw] = React.useState('');

    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        return UserInfo;
    })
    .then((UserInfo)=>{
        setUserInfo(UserInfo);
        return UserInfo;
    })
    .then((UserInfo)=>{
        const result = JSON.parse(UserInfo);
        setUserid(result["userid"]);
        setUserpw(result['userpw']);
        setUsername(result['username']);
        setUseremail(result['useremail']);
        setUserphone(result['userphone']);
    })



    //유저이름
    //username 정규식
    function NAMEonTextChanged(e){
        
        if (e.toString().length >= 2){
            return true;
        }else{
            //alert
            Alert.alert(
                "사용불가",
                "이름을 입력해주세요(공백포함불가능)",
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
    }
    //username 정규식
    
    //유저이름




    //휴대폰번호 정규식
    //   010-1234-1111  형식
    //  /\d{3}-\d{4}-\d{4}/
    
//휴대폰번호 정규식
function PHONEonTextChanged(e){
    if (/\d{3}-\d{4}-\d{4}/.test(e.toString())){
        return true;
    }else{
        //alert
        Alert.alert(
            "사용불가",
            "휴대폰 번호를 입력해주세요(ex)010-1111-1111)",
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
}
//휴대폰번호 정규식


    //그냥 아이디 정규식 체크 (가입)버튼을 누를시

    //비밀번호 정규식 체크
    function PWonTextChanged(e){
        
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.toString())){
            return true;
        }else{
            //alert
            Alert.alert(
                "사용불가",
                "비밀번호는 최소 8 자, 하나 이상의 문자와 하나의 숫자 이어야 합니다(공백 등 특수문자 사용 불가능)",
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
    }
    //비밀번호
    
//email 정규식
function EMAILonTextChanged(e){
        
    if (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(e.toString())){
        return true;
    }else{
        //alert
        Alert.alert(
            "사용불가",
            "이메일을 형식에 맞추어 입력해주세요(공백포함불가능)",
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
}
//email 정규식

const ModifyInfo = async ()=>{
        
        


        
        username2 === '' ? username : username2;
        
        userpw2 === '' ? userpw : userpw2;
        useremail2 === '' ? useremail : useremail2;
        userphone2 === '' ? userphone : userphone2;

        if(NAMEonTextChanged(username2) === false) return;
        if(PWonTextChanged(userpw2) === false) return;
        if(EMAILonTextChanged(useremail2) === false)return;
        if(PHONEonTextChanged(userphone2) === false)return;
        
        
        const data = {
            'userid':userid,
            'username':username2 === '' ? username : username2,
            'password':userpw2 === '' ? userpw : userpw2,
            'useremail':useremail2 === '' ? useremail : useremail2,
            'userphone':userphone2 === '' ? userphone : userphone2,
            'myOriginPw':myOriginPw,
            //'userWalletDist':userWalletDist
        }
        
        
        //axios 통신
        axios({
            method:"POST",
            url: `http://220.67.231.91:80/ModifyMyInfo/${userid}`,
            data: qs.stringify(data),
        }).then((res)=>{ 
            console.log('확인');
            console.log(res.data)
            if(res.data == '100'){
                console.log(`서버와 연결 성공`);
                Alert.alert(
                    "성공",
                    "회원정보 변경 성공",
                    [
                        {
                            text: "확인",
                            onPress: () => console.log('데이터변경성공'),
                            style:"cancel"
                        }
                    ],
                    { cancelable: false}
                );

                setUserid("");
                setUserpw("");
                setUsername("");
                setUseremail("");
                setUserphone("");
                setUserInfo("");
                navigation.navigate('Login');
            }else{
                Alert.alert(
                    "실패",
                    "비밀번호 불일치",
                    [
                        {
                            text: "확인",
                            onPress: () => console.log('데이터변경성공'),
                            style:"cancel"
                        }
                    ],
                    { cancelable: false}
                );
            }
        }).catch(error=>{
            console.log(`서버와 연결 실패 ${error}`);
            throw new Error(error);
        });
        //axios 통신

        //다 통과하고 가입이 되었으면 false로 되돌려줘야함
        //setUseridDuplicate(false);
        //여기에서 joinMember/:userid 로 보낼 axios 작성 

        
    }

    return(


        <ModifyMyInfoContainer>
            
            
            <ModifyMyInfoTopSmallContainer>
                <ModifyMyInfoTopText>정보수정</ModifyMyInfoTopText>
            </ModifyMyInfoTopSmallContainer>


            <ModifyMyInfoContents>

                {/* 이름 */}
                <SmallContainer>
                    <ModifyMyInfoInput
                    text='name:'
                    value = {username}    
                    onChangeText = {value => setUsername2(value)}
                    />
                </SmallContainer>
                 {/* 이름 */}


                {/* small container은 input,button 2개씩 들어가는곳만 */}
                <SmallContainer>
                    <ModifyMyInfoIdInput
                    text='아이디:'
                    value = {userid}
                    editable = {false}
                    onChangeText = {value => setUserid(value)}
                    />

                    {/*<ModifyMyInfoPageButton onPress={()=>{IDonTextChanged(userid)}}text='확인'></ModifyMyInfoPageButton>*/}
                </SmallContainer>
                
                


                <SmallContainer>
                    <ModifyMyInfoInput
                    text=''
                    value = '교체할 비밀번호:'
                    onChangeText = {value => setUserpw2(value)}
                    />
                </SmallContainer>
                
                <SmallContainer>
                    <ModifyMyInfoInput
                    text='email:'
                    
                    
                    onChangeText = {value => setUseremail2(value)}
                    value = {useremail}
                    />
                </SmallContainer>


                <SmallContainer>
                    <ModifyMyInfoInput 
                    text='phone:'
                    value = {userphone}
                    onChangeText = {value => setUserphone2(value)}
                    />

                    {/*<RegistPageButton text='확인'></RegistPageButton>*/}
                </SmallContainer>

                {/*
                    여기서 내 원래 패스워드 입력
                */}
                <SmallContainer>
                    <ModifyMyInfoInput style={{paddingTop:10}}
                    text='현재 비밀번호:'
                    value=""
                    onChangeText = {value => setMyOriginPw(value)}
                    />

                    {/*<RegistPageButton text='확인'></RegistPageButton>*/}
                </SmallContainer>
                {/*
                    여기서 내 원래 패스워드 입력
                */}


                <ModifyMyInfoConstraintArea>
                    <ConstraintText/>
                </ModifyMyInfoConstraintArea>



            

            <SmallContainerForBottomButton>
                <ModifyMyInfoPageButton onPress={()=>{navigation.goBack()}} text='취소'></ModifyMyInfoPageButton>
                <ModifyMyInfoButton onPress={()=>{ModifyInfo()}} text='수정'></ModifyMyInfoButton>
            </SmallContainerForBottomButton>

            <BlockForPreventAvoding/>

            </ModifyMyInfoContents>


        </ModifyMyInfoContainer>
    );  
};
export default ModifyMyInfo;
