import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    border-radius : 30px;
    margin: 0 auto;
    margin-top : 10px;
    width : 23%;
    height : 35px;
    background : #95B3D7;
    justify-content : center;
    align-items : center;
`;

const Label = styled.Text`
    font-size : 16px;
    font-weight : bold;
    color : #ffffff;
`;

function Button(props){
    return (
        <Container onPress = {props.onPress}>
            <Label>{props.children}</Label>
        </Container>
    )
}
export default Button;