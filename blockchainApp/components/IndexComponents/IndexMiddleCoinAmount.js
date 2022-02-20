import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';



const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
    }
});

const Container = styled.SafeAreaView`
    width:40%;
    background-color:white;
    height:10%;
    margin:0 auto;
    position:absolute;
    left:30%;
    top:53%;
    justify-content:center;
    align-items:center;
`;




function IndexMiddleCoinAmount(){
    return(
        <Container>
            <Text style={styles.text}>72339.21</Text>
            <Text style={styles.text}>HSC</Text>
        </Container>
    )
}

export default IndexMiddleCoinAmount;