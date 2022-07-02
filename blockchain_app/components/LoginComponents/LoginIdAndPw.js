import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';



const Container = styled.TouchableOpacity`
    margin:0 auto;
    border-bottom-color: black;
    border-bottom-width:1px;
`;

const Label = styled.Text`
    font-size : 16px;
    color : black;
`;


function LoginIdAndPw(props){
    return (
        <Container onPress = {props.onPress}>
            <Label></Label>
        </Container>
    )
}
export default LoginIdAndPw;