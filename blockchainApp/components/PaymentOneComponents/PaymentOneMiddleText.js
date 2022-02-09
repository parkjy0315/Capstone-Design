import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

const Container = styled.SafeAreaView`
    margin:0 auto;
    margin-top:5%;
    margin-bottom:18%;
    background-color:white;
`;

const styles = StyleSheet.create({
    text :{
        fontSize:22,
        fontWeight:'bold',
        color:'#95B3D7'
    }
});

function PaymentOneMiddleText(){
    return(
        <Container>
            <Text style={styles.text}>테두리 안에 QR코드를 스캔해주세요</Text>
        </Container>
    );
}

export default PaymentOneMiddleText;