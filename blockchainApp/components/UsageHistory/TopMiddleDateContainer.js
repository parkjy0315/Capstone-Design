import React from 'react';
import styled from 'styled-components/native';
import DatePickerContainer from './DatePickerContainer';
import LongContainer from './LongContainer';



function TopMiddleDateContainer(){
    return(
        <LongContainer>
            <DatePickerContainer/>
        </LongContainer>
    );
}

export default TopMiddleDateContainer;