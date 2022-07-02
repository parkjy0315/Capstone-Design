import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import {View,Text,StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Container = styled.SafeAreaView`
    width:95%;
    height:67%;
    background-color:white;
    margin:0 auto;
    margin-bottom:5%;
    border-radius:7px;
    border:0.5px solid gray;
`;

const InnerScrollView = styled.ScrollView`
    padding-top:10px;
    width:100%;
    height:100%;
    background-color:white;
    border-radius:7px;
`;

const TransactionView = styled.View`
    width:100%;
    margin:0 auto;
    border-radius:10px;
    flex-direction:row;
`;


const AmountText = styled.Text`
    width:20%;
    margin:0 auto;
    text-align:center;
`;

const UserIdText = styled.Text`
    width:30%;
    margin:0 auto;
    text-align:center;
`;

const DateText = styled.Text`
    width:60%;
    margin:0 auto;
    text-align:center;
    border-radius: 10px;
    margin-top:5px;
    margin-bottom:5px;
    color:rgba(162,162,162,1);
`;
//송금/결제인지 구분
const Definition_Remittance = styled.Text`
    width:10%;
    margin:0 auto;
    text-align:center;
    color:rgba(255,51,153,1.0);
`;

//송금/결제인지 구분
const Definition_Payment = styled.Text`
    width:10%;
    margin:0 auto;
    text-align:center;
    color:#ff7f00;
`;

//하나의 트랜잭션을 담는 뷰, to->from and 날짜까지
const SemiContainerForEachTransaction = styled.View`
    width:90%;
    margin:0 auto;
    border:2px solid rgba(226,226,226,1);
    border-radius:5px;
    margin-top:2px;
    padding-top:7px;
`;




function MiddleContainer(){


    //index에 저장해둔 UsageHistory를 전부 가져온다
    var UHObj = new Array();

    const [confirm,setConfirm] = React.useState();
    

    AsyncStorage.getItem('UsageHistory', (err, result) => {
        //UH가 이용내역을 저장한 배열 (내부는 index마다 클래스 객체)
        const UH = JSON.parse(result);
        setConfirm(UH);
        return UH;
    })

    //React.useEffect(()=>{},[UHObj.transactionType]);
    
    return(
        <Container style={styles.shadow}>
            <InnerScrollView>
                {
                    typeof(confirm) == "undefined"
                    ?
                        <Text>데이터 로드중...</Text>
                    :
                        confirm.map((item,index)=>{
                            
                            return (
                                //결제일때

                                item.transactionType == "payment"
                                ?
                                    <SemiContainerForEachTransaction key={index}>
                                        <TransactionView>
                                            <Definition_Payment>결제</Definition_Payment>
                                            <UserIdText>{item.senderId}</UserIdText>
                                            <UserIdText>{item.receiverId}</UserIdText>
                                            <AmountText>{item.amount} HSC</AmountText>
                                        </TransactionView>
                                        <DateText>{item.transactionTime}</DateText>
                                    </SemiContainerForEachTransaction>
                                :
                                    //송금일때
                                    <SemiContainerForEachTransaction key={index}>
                                            <TransactionView>
                                                <Definition_Remittance>송금</Definition_Remittance>
                                                <UserIdText>{item.senderId}</UserIdText>
                                                <UserIdText>{item.receiverId}</UserIdText>
                                                <AmountText>{item.amount} HSC</AmountText>
                                                
                                            </TransactionView>
                                            <DateText>{item.transactionTime}</DateText>
                                    </SemiContainerForEachTransaction>


                            )
                        })
                }
            </InnerScrollView>
        </Container>
    );

    
}


const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:-5,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});

export default MiddleContainer;