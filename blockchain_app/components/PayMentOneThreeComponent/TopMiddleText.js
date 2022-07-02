import React from 'react';
import styled from 'styled-components/native';
import SmallContainer from './SmallContainer';


const Label = styled.Text`
    font-size:30px;
    font-weight:bold;
`;



function TopMiddleText(){
    return(
        <SmallContainer>
            <Label>비밀번호를</Label>
            <Label>입력해주세요</Label>
        </SmallContainer>
    );
}


export default TopMiddleText;