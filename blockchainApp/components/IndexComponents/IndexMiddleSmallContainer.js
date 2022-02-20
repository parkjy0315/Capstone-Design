import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

const styles = StyleSheet.create({
    image :{
        width: '100%',
        height:'100%'
    },
});

const Container = styled.SafeAreaView`
    background-color:white;
    width:100%;
    height:100%;
    margin:0 auto;
    margin-top:9%;
`;

function IndexMiddleSmallContainer(){
    return(
        <Container>
            <Image source={require('../../image/HSC_ring.png')} style={styles.image}></Image>
        </Container>
    )
}

export default IndexMiddleSmallContainer;



