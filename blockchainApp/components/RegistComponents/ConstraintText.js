import React from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size : 17px;
    color : gray;
`;

function ConstraintText(){
    return(
        <Label>
            회원가입 시 개인정보제공 동의로 간주함.
        </Label>
    )
}

export default ConstraintText;