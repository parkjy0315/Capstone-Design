import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

const Container = styled.SafeAreaView`
    width:81%;
    margin:0 auto;
    background-color:white;
`;

const Label = styled.Text`
    font-size:30px;
    font-weight:bold;
`;

function RemittanceOneBottomMyInfo(){
    return(
        <Container>
            <Label>홍길동 (72339.21 HSC)</Label>
        </Container>
    )
}

export default RemittanceOneBottomMyInfo;