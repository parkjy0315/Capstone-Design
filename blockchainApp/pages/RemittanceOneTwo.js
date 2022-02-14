import React from 'react';
import styled from 'styled-components/native';

import RemittanceOneTwoContainer from '../components/RemittanceOneTwoComponents/RemittanceOneTwoContainer';
import RemittanceOneTwoTopSmallContainer from '../components/RemittanceOneTwoComponents/RemittanceOneTwoTopSmallContainer';
import TopMiddleText from '../components/RemittanceOneTwoComponents/TopMiddleText';
import InputAndConfirmBtn from '../components/RemittanceOneTwoComponents/InputAndConfirmBtn';
import MiddlePriceContainer from '../components/RemittanceOneTwoComponents/MiddlePriceContainer';
import BottomContainer from '../components/RemittanceOneTwoComponents/BottomContainer';



function RemittanceOneTwo(){
    return (
        <RemittanceOneTwoContainer>
            {/*맨위 로고와 결제 텍스트를 담은 컴포넌트 */}
            <RemittanceOneTwoTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn/>
            
            <MiddlePriceContainer/>

            <BottomContainer/>

        </RemittanceOneTwoContainer>
    );
}

export default RemittanceOneTwo;