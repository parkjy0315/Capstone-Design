import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import PaymentOneTwoPageButton from './PaymentOneTwoPageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput/>
            <PaymentOneTwoPageButton
            text='확인'
            onPress={()=>navigation.navigate('PaymentOneThree')}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;