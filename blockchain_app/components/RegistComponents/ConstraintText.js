import React from 'react';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size : 17px;
    color : gray;
`;
const Container = styled.SafeAreaView`
    flex:1;
`;

function ConstraintText(){
    return(
        <Container>
            <Label>
                회원가입 시 개인정보제공
            </Label>
            <Label>
                동의로 간주함
            </Label>
        </Container>
    )
}

export default ConstraintText;