import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled.TouchableOpacity`
    border-radius : 30px;
    margin-top:35%;
    width : 100%;
    height : 35px;
    background : #95B3D7;
    justify-content:center;
    align-items : center;
    align-self : flex-start;
`;

const Label = styled.Text`
    font-size : 18px;
    color : #ffffff;
`;


function IndexPageRemittanceButton(props){
    const navigation = useNavigation();
    return (
        <Container onPress = {props.onPress}>
            <Label>{props.text}</Label>
        </Container>
    )
}
export default IndexPageRemittanceButton;