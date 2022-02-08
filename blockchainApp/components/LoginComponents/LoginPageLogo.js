import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image} from 'react-native';
const Container = styled.SafeAreaView`
    width : 100%;
    height : 300px;
    margin-top:20px;
    justify-content : center;
    align-items : center;
`;
const styles = StyleSheet.create({
    image :{
        width: '100%',
        height:'100%'
    }
});

function LoginPageLogo(props){
    return (
        <Container onPress = {props.onPress}>
            {/*<Label>{props.children}</Label>*/}
            <Image source={require('../../image/LoginPageImage/HSC_logo.png')} style={styles.image}></Image>
        </Container>
    )
}
export default LoginPageLogo;