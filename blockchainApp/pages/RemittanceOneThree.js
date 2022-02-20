import React from 'react';
import styled from 'styled-components/native';

import RemittanceOneThreeContainer from '../components/RemittanceOneThreeComponents/RemittanceOneThreeContainer';

//최상단 로와 결제 텍스트
import RemittanceOneThreeTopSmallContainer from '../components/RemittanceOneThreeComponents/RemittanceOneThreeTopSmallContainer';

//최상단 바로 밑 지불가격을 선택해주세요 텍스트
import TopMiddleText from '../components/RemittanceOneThreeComponents/TopMiddleText';

import InputAndConfirmBtn from '../components/RemittanceOneThreeComponents/InputAndConfirmBtn';

import MiddleContainer from '../components/RemittanceOneThreeComponents/MiddleContainer';

import BottomContainer from '../components/RemittanceOneThreeComponents/BottomContainer';

function RemittanceOneThree(){
    return(
        <RemittanceOneThreeContainer>
            <RemittanceOneThreeTopSmallContainer/>
            <TopMiddleText/>
            <InputAndConfirmBtn/>

            <MiddleContainer/>

            <BottomContainer/>
            
        </RemittanceOneThreeContainer>
    );
}

export default RemittanceOneThree;