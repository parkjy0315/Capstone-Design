import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image} from 'react-native';
const styles = StyleSheet.create({
    image :{
        width: '70%',
        height:'90%'
    }
});
const Container = styled.TouchableOpacity`
    border-radius : 30px;
    width : 0%;
    height : 35px;
    background : white;
    justify-content:center;
    align-items : center;
    align-self : flex-start;
`;



function FranchiseePageButton(props){
    return (
        <Container onPress = {props.onPress}>
            {/*<Image source={require('../../image/gl.png')} style={styles.image}></Image>*/}
        </Container>
    )
}
export default FranchiseePageButton;