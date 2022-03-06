import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';

const Container = styled.SafeAreaView`
    width:80%;
    margin:0 auto;
    margin-bottom:10%;
    background-color:white;
    border-width:0.5px;
    border-radius:7px;
`;

const SmallContainer = styled.ScrollView`
    width:98%;
    height:40%;
    background-color:white;
    position:relative;
    border-radius:7;
`;

const Label = styled.Text`
    margin-left:4%;
    margin-top:15%;
    margin-bottom:5%;
`;

const Label2 = styled.Text`
    margin-left:4%;
    margin-top:1%;
    margin-bottom:5%;
`;


const styles = StyleSheet.create({
    text :{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        position:'absolute',
        left:10,
        top:10
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
    return(
        <Container style={styles.shadow}>
            <SmallContainer>
                <Text style={styles.text}>즐겨찾기</Text>
                <Label style={styles.font}>김철수 (ddsiad0a-01d)</Label>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                <Label2 style={styles.font}>이재문 교수님 (zsafa2ga-65f)</Label2>
                
            </SmallContainer>
        </Container>
    );
}



export default RemittanceOneMiddleFriendList;