import React from 'react';
import styled from 'styled-components/native';
import PriceButton from './PriceButton';
import {Platform} from 'react-native';
const btnMarginBottom = Platform.OS === 'ios'
? 8 : 5;

const Container = styled.SafeAreaView`
    width:85%;
    height:30%;
    background-color:white;
    margin-left:5%;
    flex-direction: column;
`;

const SmallContainer = styled.SafeAreaView`
    width: 100%;
    height: 15%;
    background-color:white;
    margin-bottom:${btnMarginBottom}%;
    flex-direction:row;
`;

function MiddlePriceContainer(){
    return(
        <Container>
            <SmallContainer>
                <PriceButton text = "+1"/>
                <PriceButton text = "+10"/>
                <PriceButton text = "+100"/>
            </SmallContainer>

            <SmallContainer>
                <PriceButton text = "+1,000"/>
                <PriceButton text = "+10,000"/>
            </SmallContainer>
        </Container>
    );
}

export default MiddlePriceContainer;