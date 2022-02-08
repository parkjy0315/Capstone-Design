import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    border-radius : 30px;
    margin-left:6%
    width : 20%;
    height : 35px;
    background : black;
    justify-content:center;
    align-items : center;
    align-self : flex-start;
`;

const Label = styled.Text`
    font-size : 18px;
    color : #ffffff;
`;


function RegistButton(props){
    return (
        <Container onPress = {props.onPress}>
            <Label>{props.text}</Label>
        </Container>
    )
}
export default RegistButton;