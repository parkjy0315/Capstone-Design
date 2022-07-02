import React from 'react';
import styled from 'styled-components/native';
import {Platform,Dimensions,StyleSheet,Image,Text} from 'react-native';

const bottomFontSize = Platform.OS === 'ios' ? 25 : 30;

const Container = styled.SafeAreaView`
    width:81%;
    margin:0 auto;
    background-color:white;
`;

const Label = styled.Text`
    font-size:${bottomFontSize}px;
    font-weight:bold;
`;

function RemittanceOneBottomMyInfo(props){
    return(
        <Container>
            <Label></Label>
        </Container>
    )
}

export default RemittanceOneBottomMyInfo;