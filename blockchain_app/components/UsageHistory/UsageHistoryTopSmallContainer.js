import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

const styles = StyleSheet.create({
    image :{
        width: '30%',
        height:'90%',
        marginTop:7
    },
    text : {
        fontSize:27,
        fontWeight:'bold',
        marginTop:'1.5%'
    }

});

const Container = styled.SafeAreaView`
    background-color:white;
    width:84%;
    height:36px;
    flex-direction:row;
    justify-content:space-between;
    margin:0 auto;
    margin-top:7%;
`;


function UsageHistoryTopSmallContainer(){
    return(
        <Container>
            <Image source={require('../../image/logo2.png')} style={styles.image}></Image>
            <Text style={styles.text}>이용내역</Text>
        </Container>
    )
}

export default UsageHistoryTopSmallContainer;



