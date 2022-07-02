import React from 'react';
import styled from 'styled-components/native';



import { Dimensions } from 'react-native';
import {Platform,StyleSheet,Text} from 'react-native';


const width = Platform.OS === 'ios' ? 42 : 40;
const height = Platform.OS === 'ios' ? 11 : 10;


//const width = Platform.OS === 'ios' ? 100
 //: 90; 

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
    }
});

const Container = styled.SafeAreaView`
    width:${width}%;
    background-color:white;
    height:${height}%;
    margin:0 auto;
    position:absolute;
    left:30%;
    top:53%;
    justify-content:center;
    align-items:center;
`;




function IndexMiddleCoinAmount(props){
    return(
        <Container>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.text}>HSC</Text>
        </Container>
    )
}

export default IndexMiddleCoinAmount;