import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text,Clipboard} from 'react-native';

//alert를 띄우기위한 import 
import { Alert } from "react-native";

import axios from 'axios';
import qs from 'qs';



import AsyncStorage from '@react-native-async-storage/async-storage';
const Container = styled.SafeAreaView`
    width:80%;
    margin:0 auto;
    margin-bottom:10%;
    background-color:white;
    border-width:0.5px;
    border-radius:7px;
`;

const NanoContainer = styled.SafeAreaView`
`;
const SmallContainer = styled.ScrollView`
    width:98%;
    height:40%;
    background-color:white;
    position:relative;
    border-radius:7px;
`;

const HiddenLabel = styled.Text`
    font-size:0.5px;
    opacity:0;
`;

const Label2 = styled.Text`
    margin-left:4%;
    margin-top:1%;
    margin-bottom:5%;
`;

const TouchableHighlightView = styled.TouchableHighlight`
`;


const styles = StyleSheet.create({
    smallcontainer :{
        padding:9
    },
    text :{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        margin:3,
        marginBottom:12
        //position:'absolute',
        //left:10,
        //top:10
    },
    shadow : {
        ...Platform.select({
            ios : {
                borderWidth:0.5,
                borderRadius:7 ,
                shadowColor : '#95B3D7',
                shadowOffset: {width:-3,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    },
    font :{
        fontSize:20,
    }
});

function RemittanceOneMiddleFriendList(){
    const [remittTransInfo,setRemittTransInfo] = React.useState();
    
    //클립보드
    //const [copiedText, setCopiedText] = React.useState('');

    AsyncStorage.getItem('remittTrans', (err, result) => {
        const remittTransInfo = JSON.parse(result);
        setRemittTransInfo(remittTransInfo["remittTransvalues"]);
    })

    function showAlert(index){
        Alert.alert(
            "",
            "주소가 복사되었습니다",
            [
                {
                    text: "확인",
                    onPress: () =>
                    {
                        /*
                        console.log('등록함');
                        //axios 통신
                        AsyncStorage.getItem('userinformation', (err, result) => {
                            const UserInfo = JSON.parse(result);
                            //내 아이디 확보 
                            setToUserId(UserInfo["userid"]);
                            //console.log(remittTransInfo[index].username);
                            //console.log(remittTransInfo[index].userAccount);
                            setFromUserName(remittTransInfo[index].username);
                            setFromUserAccount(remittTransInfo[index].userAccount);
                            //즐찾할 아이디 확보
                            //즐찾할 주소 확보 
                            return UserInfo;
                        })
                        .then((userAccount)=>{
                            axios({
                                method:"POST",
                                url: `http://220.67.231.91:80/addFavicon`,
                                data: {
                                    userId:toUserId,
                                    faviconId:fromUserName,
                                    faviconAddress:fromUserAccount,
                                },
                            }).then((res)=>{
                                console.log(`서버와 연결 성공`);
                                console.log(res.data);
                            }).catch(error=>{
                                console.log(`서버와 연결 실패 ${error}`);
                                throw new Error(error);
                            });
                        })
                        //axios 통신
                        */


                        //console.log('갱신');
                        //console.log();
                        //setCopiedText(remittTransInfo[index]);
                        Clipboard.setString(remittTransInfo[index].userAccount);
                    },
                    style:"cancel"
                }
            ],
            { cancelable: false}
        );
    }

    return(
        <Container style={styles.shadow}>
            
            <SmallContainer style={styles.smallcontainer}>
            <Text style={styles.text}>최근거래목록</Text>    
                { 
                typeof(remittTransInfo) == "undefined"?
                <Text>데이터 로드중...</Text>
                :
                remittTransInfo.map((item,index)=>{
                    return(
                        <TouchableHighlightView
                            key={index}
                            //onLongPress={()=>{showAlert(index)}}
                            onPress={()=>{showAlert(index)}}
                        >
                            {/*<Label2 style={styles.font}> {item.username} : {item.userAccount}</Label2>*/}
                            <NanoContainer>
                                <Label2 
                                    style={styles.font}
                                > 
                                {item.username}
                                </Label2>
                                
                                <HiddenLabel>{item.userAccount}</HiddenLabel>
                            
                            </NanoContainer>
                        </TouchableHighlightView>
                    )
                })}
                
            </SmallContainer>
        </Container>
    );
}



export default RemittanceOneMiddleFriendList;