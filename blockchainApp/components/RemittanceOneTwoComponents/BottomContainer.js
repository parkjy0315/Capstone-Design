import React from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size:30px;
    font-weight:bold;
`;

const Container = styled.SafeAreaView`
    background-color:white;
    width:80%;
    margin:0 auto;
    margin-top:25%;
    flex-direction:row;
`;


function BottomContainer(){
    return(
        <Container>
            <Label>홍길동(72339.21 HSC)</Label>
        </Container>
    );
}

export default BottomContainer;