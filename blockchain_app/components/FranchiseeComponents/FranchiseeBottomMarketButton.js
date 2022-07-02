import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';
import { WhiteBalance } from 'expo-camera/build/Camera.types';

const Container = styled.TouchableOpacity`
    border-radius : 7px;
    width : 24%;
    height : 95%;
    background-color : #95B3D7;
    justify-content:center;
    align-items : center;
    margin:auto 0.5%;
`;
const styles = StyleSheet.create({
    text :{
        color:'white',
        fontSize:17,
    }
});


function FranchiseeBottomMarketButton(props){
    return(
        <Container>
            <Text onPress={props.onPress} style={styles.text}>편의시설</Text>
        </Container>
    );
};

export default FranchiseeBottomMarketButton;