import React from 'react';
import _ from 'lodash';
import RegistContainer from '../components/RegistComponents/RegistContainer';
import RegistContents from '../components/RegistComponents/RegistContents';
import RegistPageButton from '../components/RegistComponents/RegistPageButton';
//맨위에 '회원가입' 텍스트 컴포넌트
import RegistTopText from '../components/RegistComponents/RegistTopText';
import RegistTopSmallContainer from '../components/RegistComponents/RegistTopSmallContainer';
import RegistInput from '../components/RegistComponents/RegistInput';


//어쩔수없는 블록 (avoding을 막기위한)
import BlockForPreventAvoding from '../components/RegistComponents/BlockForPreventAvoding';

//영역잡기용 SmallContainer
import SmallContainer from '../components/RegistComponents/SmallContainer';

//따로만든 회원가입 버튼
import RegistButton from '../components/RegistComponents/RegistButton';

//따로만든 BottomButton용 컴포넌트
import SmallContainerForBottomButton from '../components/RegistComponents/SmallContainerForBottomButton';

//Picker 실험 보류
import Test from '../components/RegistComponents/Test';

import SmallContainerForMiddlePicker from '../components/RegistComponents/SmallContainerForMiddlePicker';

import RegistDatePicker from '../components/RegistComponents/RegistDatePicker';
import RegistConstraintArea from '../components/RegistComponents/RegistConstraintArea';

import ConstraintText from '../components/RegistComponents/ConstraintText';

import axios from 'axios';
import qs from 'qs';

//alert를 띄우기위한 import 
import { Alert } from "react-native";


function Regist({navigation}){
    console.disableYellowBox = true;
    const [fullDate,setFullDate] = React.useState('2022-03-03');
    
    const [year,setYear] = React.useState('');
    const [month,setMonth] = React.useState('');
    const [day,setDay] = React.useState('');
    
    
    const [userid,setUserid] = React.useState('');
    const [userpw,setUserpw] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [useremail,setUseremail] = React.useState('');
    const [userphone,setUserphone] = React.useState('');

    //아이디 중복체크 setduplicate
    const [useridDuplicate,setUseridDuplicate] = React.useState(false);


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


    //아이디 확인버튼 정규식 검증 버튼 메서드
    //아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자.
    function IDonTextChanged(e){
        if (/^[a-z]+[a-z0-9]{5,19}$/g.test(e.toString())){

            //여기서 firebase에 다녀와서 아이디가 중복되나 체크해야함
            //순서 1.nodejs 서버로 아이디 전송
            //순서 2.nodejs 에서 firebase로 아이디 검색
            //순서 3.검색이되면 다시 여기로 res를 100을 보냄.
            //순서 3_2. 검색이 안되면 다시 여기로 res를 200을 보냄.

            //e 는 아이디
            // 가야할 url 은 checkIdDuplicate/:userid

            //axios
            axios({
                method:"GET",
                url: `http://220.67.231.91:80/checkIdDuplicate/${e}`,
            }).then((data)=>{
                return data;
            }).then((res)=>{
                
                //서버에서 100이오면 중복이 있는걸로 setUseridDuplicate를 false로 지정
                if(res.data === '100'){
                    setUseridDuplicate(false);
                    //alert
                    Alert.alert(
                        "",
                        "중복되는 아이디입니다",
                        [
                            {
                                text: "확인",
                                onPress: () => console.log('사용불가능'),
                                style:"cancel"
                            }
                        ],
                        { cancelable: false}
                    );
                    return false;
                    //alert


                }else{
                    setUseridDuplicate(true);
                    //alert
                    Alert.alert(
                        "",
                        "사용가능한 아이디 입니다",
                        [
                            {
                                text: "확인",
                                onPress: () => console.log('사용가능'),
                                style:"cancel"
                            }
                        ],
                        { cancelable: false}
                    );
                    return true;
                    //alert
                }
                //else끝
                //이부분 조심
            })
            //axios

            
        }else {
            //alert
            Alert.alert(
                "사용불가",
                "아이디는 영문자로 시작하는 6~20자 영(소)문자 또는 숫자여야 합니다",
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
    //아이디 정규식 체크



    //그냥 아이디 정규식 체크 (가입)버튼을 누를시
    function ID2onTextChanged(e){
        if (/^[a-z]+[a-z0-9]{5,19}$/g.test(e.toString())){
            //alert
            
            //alert
            return true;
        }else {
            //alert
            Alert.alert(
                "사용불가",
                "아이디는 영문자로 시작하는 6~20자 영(소)문자 또는 숫자여야 합니다",
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
    //아이디 정규식 체크
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
    
//생년월일 정규식
function BIRTHonTextChanged(e){
    if(year === '' || month === '' || day === ''){
        //alert
        Alert.alert(
            "사용불가",
            "생년월일을 입력하세요",
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


    if (e <= 2012){
        return true;
    }else{
        //alert
        Alert.alert(
            "사용불가",
            "10세이상만 가입이 가능합니다",
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
//생년월일 정규식


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

    const store = async ()=>{
        const name = username;
        const password = userpw;
        
        let list;
        if(ID2onTextChanged(userid) === false) return;
        if(PWonTextChanged(userpw) === false) return;
        if(NAMEonTextChanged(username) === false)return;
        if(BIRTHonTextChanged(year) === false)return;
        if(EMAILonTextChanged(useremail) === false)return;
        if(PHONEonTextChanged(userphone) === false)return;
        
        if(useridDuplicate === false){
            //alert
            Alert.alert(
                "사용불가",
                "아이디 중복체크를 완료하세요",
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
        
        const data = {
            'password':userpw,
            'name':username,
            'useremail':useremail,
            'userphone':userphone,
            'year':year,
            'month':month,
            'day':day,
            //'userWalletDist':userWalletDist
        }
        
        
        //axios 통신
        axios({
            method:"POST",
            url: `http://220.67.231.91:80/joinMember/${userid}`,
            data: qs.stringify(data),
        }).then((res)=>{
            
            console.log(`서버와 연결 성공`);
            navigation.goBack();
        }).catch(error=>{
            console.log(`서버와 연결 실패 ${error}`);
            throw new Error(error);
        });
        //axios 통신

        //다 통과하고 가입이 되었으면 false로 되돌려줘야함
        setUseridDuplicate(false);
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

                    <RegistPageButton onPress={()=>{IDonTextChanged(userid)}}text='확인'></RegistPageButton>
                </SmallContainer>
                
                
                <SmallContainer>
                    <RegistInput
                    text='   PW :'
                    value = {userpw}
                    onChangeText = {value => setUserpw(value)}
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
                    {/*<RegistPageButton text='남  ▼'></RegistPageButton>*/}
                </SmallContainer>
                
                {/*원래 picker 제작하던 자리*/}    


                {/* middle Container 따로 제작 여기건드리면 자살; */}
                <SmallContainerForMiddlePicker>
                    <Test text={fullDate} onDateChange={(value) => {
                        setFullDate(value);
                        setYear(`${value.split('-')[0]}`);
                        setMonth(`${value.split('-')[1]}`);
                        setDay(`${value.split('-')[2]}`);
                        }}/>
                    <RegistDatePicker text={`${fullDate.split('-')[0]} ▼`}></RegistDatePicker>
                    <RegistDatePicker text={`${fullDate.split('-')[1]} ▼`}></RegistDatePicker>
                    <RegistDatePicker text={`${fullDate.split('-')[2]} ▼`}></RegistDatePicker>
                </SmallContainerForMiddlePicker>


                
                <SmallContainer>
                    <RegistInput
                    text='   email :'
                    value = {useremail}
                    
                    onChangeText = {value => setUseremail(value)}
                    />
                </SmallContainer>


                <SmallContainer>
                    <RegistInput 
                    text='   phone :'
                    value = {userphone}
                    onChangeText = {value => setUserphone(value)}
                    />

                </SmallContainer>


                <RegistConstraintArea>
                    <ConstraintText/>
                </RegistConstraintArea>

            <SmallContainerForBottomButton>
                <RegistPageButton onPress={()=>{navigation.navigate('Login')}} text='취소'></RegistPageButton>
                <RegistButton onPress={()=>{store()}} text='가입'></RegistButton>
            </SmallContainerForBottomButton>

            <BlockForPreventAvoding/>

            </RegistContents>


        </RegistContainer>
    );  
};
export default Regist;
