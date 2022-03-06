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

// const styles = StyleSheet.create({
//     item: {
//         marginTop : 30
//     }
// });

function LoginIdAndPw(props){
    return (
        <Container onPress = {props.onPress}>
            <Label>ID/PW찾기</Label>
        </Container>
    )
}
export default LoginIdAndPw;