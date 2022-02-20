import React from 'react';
import styled from 'styled-components/native';

import PaymentOneTwoContainer from '../components/PaymentOneTwoComponents/PaymentOneTwoContainer';
import PaymentOneTwoTopSmallContainer from '../components/PaymentOneTwoComponents/PaymentOneTwoTopSmallContainer';
import TopMiddleText from '../components/PaymentOneTwoComponents/TopMiddleText';
import InputAndConfirmBtn from '../components/PaymentOneTwoComponents/InputAndConfirmBtn';
import MiddlePriceContainer from '../components/PaymentOneTwoComponents/MiddlePriceContainer';
import BottomContainer from '../components/PaymentOneTwoComponents/BottomContainer';



function PaymentOneTwo(){
    return (
        <PaymentOneTwoContainer>
            {/*맨위 로고와 결제 텍스트를 담은 컴포넌트 */}
            <PaymentOneTwoTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn/>
            
            <MiddlePriceContainer/>

            <BottomContainer/>




        </PaymentOneTwoContainer>
    );
}

export default PaymentOneTwo;