import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    border-radius : 30px;
    margin-left:3.5%
    width : 26.6%;
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

{/*원래 23번라인 자리 <Container onPress = {props.onPress}>*/}
function RegistDatePicker(props){
    return (
        <Container>
            <Label
                onChangeText={props.onChangeText}
            >{props.text}</Label>
        </Container>
    )
}
export default RegistDatePicker;