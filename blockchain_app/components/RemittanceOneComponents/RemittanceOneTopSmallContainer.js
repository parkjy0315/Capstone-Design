import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

const styles = StyleSheet.create({
    image :{
        width: '30%',
        height:'100%'
    },
    text : {
        fontSize:27,
        fontWeight:'bold',
        marginTop:'1.5%'
    }
});

const Container = styled.SafeAreaView`
    background-color:white;
    width:82%;
    height:36px;
    flex-direction:row;
    justify-content:space-between;
    margin:0 auto;
    margin-top:7%;
    margin-bottom:6%;
`;

function RemittanceOneTopSmallContainer(){
    return(
        <Container>
            <Image source={require('../../image/logo2.png')} style={styles.image}></Image>
            <Text style={styles.text}>송금</Text>
        </Container>
    )
}

export default RemittanceOneTopSmallContainer;



