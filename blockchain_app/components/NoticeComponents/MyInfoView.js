import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-web';
import ModifyInfoButton from './ModifyInfoButton';
import LogOutButton from './LogOutButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';


const Container = styled.SafeAreaView`
    width:100%;
    height:50%;
    background-color:white;
    border:0.5px solid gray;
    margin:0 auto;
    margin-bottom:10%;
`;


const View1 = styled.SafeAreaView`
    flex-direction:row;
    margin:0 auto;
    margin-top:5%;
`;

const Text1 = styled.Text`
    font-size:25px;
`;

const View2 = styled.SafeAreaView`
    margin:0 auto;
    flex-direction:row;
    margin-top:10%;
`;

const Text2 = styled.Text`
    font-size:19px;

`;










function MyInfoView(props){
    const [name,setName] = React.useState("");
    const [userid,setUserid] = React.useState("");

    const navigation = useNavigation();

    function goLoginPage(){
        navigation.navigate('Login');
    }
    
    function goModifyMyInfoPage(){
        navigation.navigate('ModifyMyInfo');
    }


    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        setName(UserInfo["username"]);
        setUserid(UserInfo["userid"]);
        return UserInfo;
    })


    return(
        <Container style={props.style}>
            <View1>
                <Text1>{name}</Text1><Text2>({userid})</Text2>
            </View1>
            <View2>
                <ModifyInfoButton onPress={()=>{goModifyMyInfoPage()}} text="정보수정"/>
                <LogOutButton onPress={()=>{goLoginPage()}} text="로그아웃"/>
            </View2>
        </Container>
    )
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

export default MyInfoView;