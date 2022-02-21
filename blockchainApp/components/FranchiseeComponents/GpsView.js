import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    background-color:white;
    border-radius:7px;
`;

function GpsView(){
    return(
        <Container style={styles.shadow}>


        </Container>
    );
};

export default GpsView;

const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:-5,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});