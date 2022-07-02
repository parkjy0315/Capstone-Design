import React from 'react';
import styled from 'styled-components/native';
const Container = styled.SafeAreaView`
    width:100%;
    height:45%;
    background-color:white;
    border-radius:7px;
    border:0.5px solid gray;
`;

function NoticeViewTwo(props){
    return(
        <Container style={props.style}>
            
        </Container>
    );
}

export default NoticeViewTwo;