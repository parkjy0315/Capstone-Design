import React from 'react';
import styled from 'styled-components/native';
import {Text,StyleSheet} from 'react-native';

const Container = styled.SafeAreaView`
    width:95%;
    height:63%;
    background-color:white;
    margin:0 auto;
    margin-bottom:5%;
    border-radius:7px;
    border:0.5px solid gray;
`;

const InnerScrollView = styled.ScrollView`
    width:100%;
    height:100%;
    background-color:white;
    border-radius:7px;
`;

function MiddleContainer(){
    return(
        <Container style={styles.shadow}>
            <InnerScrollView>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            <Text>텍스트</Text>
            </InnerScrollView>
        </Container>
    );
}


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

export default MiddleContainer;