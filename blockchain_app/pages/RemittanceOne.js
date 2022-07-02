import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';


import RemittanceOneContainer from '../components/RemittanceOneComponents/RemittanceOneContainer';
import RemittanceOneBottomMyInfo from '../components/RemittanceOneComponents/RemittanceOneBottomMyInfo';
import RemittanceOneMiddleFriendList from '../components/RemittanceOneComponents/RemittanceOneMiddleFriendList';
import RemittanceOneTopSmallContainer from '../components/RemittanceOneComponents/RemittanceOneTopSmallContainer';

import InputAndConfirmBtn from '../components/RemittanceOneComponents/InputAndConfirmBtn';
import TopMiddleText from '../components/RemittanceOneComponents/TopMiddleText';
import { Alert } from "react-native";

//index.js 에 쓰인 Text
const Text = styled.Text`
    font-size : 20px;
    line-height:20px;
`;


function RemittanceOne({navigation}){
    console.disableYellowBox = true;
    const [recevierAddress,setRecevierAddress] = React.useState('');
    //서버로 넘어갈 dataSet 생성
    var dataSet = {
        'userid':'',
        'userpassword':'',
        'senderAddress':'',
        'recevierAddress':'',
        'amount':'',
    }
    //모든정보 세팅 후 navigate
    
    

    function AllCheckOkGoNextPage(inputData){
        if(inputData!==''){
          dataSet["recevierAddress"] = inputData;
          navigation.navigate('RemittanceOneTwo',{data:dataSet});
        }else{
            //alert
            Alert.alert(
                "",
                "지갑주소를 입력하세요",
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
          console.log('inputData 든게 없습니다. Paymentone내부 오류');
          return false;
        } 
      }


    return(
        <RemittanceOneContainer>
            
            <RemittanceOneTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn 
                onChangeText={(value)=>{setRecevierAddress(value)}}
                onPress={()=>{AllCheckOkGoNextPage(recevierAddress)}}
            />
                

            <RemittanceOneMiddleFriendList/>
            
            <RemittanceOneBottomMyInfo/>

        </RemittanceOneContainer>
    );
};


export default RemittanceOne;