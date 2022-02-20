import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    width:85%;
    height:27%;
    background-color:white;
    margin: 0 auto;
    margin-top:5%;
`;
const Label = styled.Text`
    font-size:20px;
    color:gray;
    margin-bottom:5%;
`;

function MiddleContainer(){
    return(
        <Container>
            <Label>
                김철수의 지갑 (ddsiad0a-01d)
            </Label>
            <Label>
                송금금액  :  1130  HSC
            </Label>
            
        </Container>
    );
}

export default MiddleContainer;