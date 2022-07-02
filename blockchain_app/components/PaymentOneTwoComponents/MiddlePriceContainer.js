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

function MiddlePriceContainer(props){
    return(
        <Container>
            <SmallContainer>
                <PriceButton 
                    text = "1"
                    onPress = {props.onPress}
                />
                <PriceButton 
                    text = "5"
                    onPress = {props.onPress}
                />
                <PriceButton 
                    text = "10"
                    onPress = {props.onPress}
                />
            </SmallContainer>

            <SmallContainer>
                <PriceButton 
                    text = "50"
                    onPress = {props.onPress}
                />
                <PriceButton 
                    text = "100"
                    onPress = {props.onPress}
                />
            </SmallContainer>
        </Container>
    );
}

export default MiddlePriceContainer;