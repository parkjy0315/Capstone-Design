import React from 'react';
import styled from 'styled-components/native';

import PaymentOneThreeContainer from '../components/PayMentOneThreeComponent/PaymentOneThreeContainer';

//최상단 로와 결제 텍스트
import PaymentOneThreeTopSmallContainer from '../components/PayMentOneThreeComponent/PaymentOneThreeTopSmallContainer';

//최상단 바로 밑 지불가격을 선택해주세요 텍스트
import TopMiddleText from '../components/PayMentOneThreeComponent/TopMiddleText';

import InputAndConfirmBtn from '../components/PayMentOneThreeComponent/InputAndConfirmBtn';

import MiddleContainer from '../components/PayMentOneThreeComponent/MiddleContainer';

import BottomContainer from '../components/PayMentOneThreeComponent/BottomContainer';

function PaymentOneThree(){
    return(
        <PaymentOneThreeContainer>
            <PaymentOneThreeTopSmallContainer/>
            <TopMiddleText/>
            <InputAndConfirmBtn/>

            <MiddleContainer/>

            <BottomContainer/>
            
        </PaymentOneThreeContainer>
    );
}

export default PaymentOneThree;