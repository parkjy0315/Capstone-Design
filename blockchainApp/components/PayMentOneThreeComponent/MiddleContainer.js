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
                영웅중화요리
            </Label>
            <Label>
                결제금액  :  329  HSC
            </Label>
            
        </Container>
    );
}

export default MiddleContainer;