import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import Container from '../components/Container';
//송출금 목록
import RemittanceList from '../components/RemittanceList';
import UserInfoContainer from '../components/UserInfoComponents/UserInfoContainer';
import UserInfoContents from '../components/UserInfoComponents/UserInfoContents';

//UserInfo.fs 의 Text
const Text = styled.Text`
    font-size : 20px;
    line-height: 28px;
`;

function UserInfo({navigation,route}){
    console.disableYellowBox = true;
    return(
        <UserInfoContainer>
            <UserInfoContents>
                <Text>userid: {route.params.id} </Text>
                <Text>username: 홍길동  </Text>
                <Text>user지갑주소: {route.params.wd}... </Text>
                <Text>지갑 내 잔액: 3000hsc </Text>
            </UserInfoContents>
            <RemittanceList>
                <Text>거래내역</Text>
                <Text>to fawfnjwfajl 2000hsc</Text>
                <Text>from fawfnjwfajl 350hsc</Text>
                <Text>to fawfnjwfajl 8000hsc</Text>
                <Text>to fawfnjwfajl 12000hsc</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>
                <Text>to fawfnjwfajl</Text>


            </RemittanceList>
        </UserInfoContainer>
    );
};

export default UserInfo;