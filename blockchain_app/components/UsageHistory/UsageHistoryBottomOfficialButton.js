import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';
import { WhiteBalance } from 'expo-camera/build/Camera.types';

const Container = styled.TouchableOpacity`
    border-radius : 7px;
    width : 24%;
    height : 95%;
    background-color : white;
    justify-content:center;
    align-items : center;
    margin:auto 0.5%;
`;
const styles = StyleSheet.create({
    text :{
        color:'black',
        fontSize:17,
    }
});

function UsageHistoryBottomOfficialButton(props){
    return(
        <Container>
            <Text onPress={props.onPress} style={styles.text}>마이</Text>
        </Container>
    );
};

export default UsageHistoryBottomOfficialButton;