import React from 'react';
import styled from 'styled-components/native';

import {Platform} from 'react-native';
const width = Platform.OS === 'ios'
? 25 : 24;

const height = Platform.OS === 'ios'
? 31 : 35;

const btnMarginLeft = Platform.OS === 'ios'
? 4 : 5;

const btnFontSize = Platform.OS === 'ios'
? 14 : 16;


const Container = styled.TouchableOpacity`
    border-radius : 30px;
    margin-left:${btnMarginLeft}%
    width : ${width}%;
    height : ${height}px;
    background : #95B3D7;
    justify-content:center;
    align-items : center;
    align-self : flex-start;
`;

const Label = styled.Text`
    font-size : ${btnFontSize}px;
    color : #ffffff;
`;


function PriceButton(props){
    return (
        <Container
            onPress = {()=>{props.onPress(parseInt(props.text))}}
        >
            <Label>{"+"+props.text}</Label>
        </Container>
    )
}
export default PriceButton;