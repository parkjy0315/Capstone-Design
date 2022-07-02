import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import {Platform,Dimensions,StyleSheet,Text} from 'react-native';

const bottomFontSize = Platform.OS === 'ios' ? 25 : 30;

const Label = styled.Text`
    font-size:${bottomFontSize}px;
    font-weight:bold;
`;

const Container = styled.SafeAreaView`
    background-color:white;
    width:80%;
    margin:0 auto;
    flex-direction:row;
`;


function BottomContainer(){
    return(
        <Container>
            <Label></Label>
        </Container>
    );
}

export default BottomContainer;