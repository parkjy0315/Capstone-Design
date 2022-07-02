import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    width:85%;
    height:10%;
    background-color:white;
    margin: 0 auto;
    margin-top:5%;
`;
const LabelTo = styled.Text`
    font-size:11px;
    color:gray;
    margin-bottom:5%;
`;
const LabelAmount = styled.Text`
    font-size:20px;
    color:gray;
    margin-bottom:5%;
`;

function MiddleContainer(props){
    return(
        <Container>
            <LabelTo>
                to : {props.textvalue}
            </LabelTo>
            <LabelAmount>
                amount : {props.amountvalue}  HSC
            </LabelAmount>
            
            
        </Container>
    );
}

export default MiddleContainer;