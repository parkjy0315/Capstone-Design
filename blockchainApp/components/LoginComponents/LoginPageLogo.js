import React from 'react';
import styled from 'styled-components/native';

import {Platform,StyleSheet,Image} from 'react-native';


const width = Platform.OS === 'ios' ? 100
 : 90; 
const height = Platform.OS === 'ios' ? 150 : 200;
const margin_top = Platform.OS === 'ios' ? 0 : 10;
const margin_bottom = Platform.OS === 'ios' ? 0 : 10;


const Container = styled.SafeAreaView`
    margin:0 auto;
    width : ${width}%;
    height : ${height}px;
    margin-top:${margin_top}px;
    margin-bottom:${margin_bottom}px;
    background-color:white;
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