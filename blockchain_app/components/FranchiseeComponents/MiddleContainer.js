import React from 'react';
import styled from 'styled-components/native';

import GpsView from './GpsView';

const Container = styled.SafeAreaView`
    width:95%;
    height:60%;
    background-color:green;
    margin:0 auto;
    margin-bottom:5%;
    border-radius:7px;
    border:0.5px solid gray;
`;
function MiddleContainer(props){
    return(
        <Container>
            <GpsView value={props.name}/>
        </Container>
    );
}



export default MiddleContainer;