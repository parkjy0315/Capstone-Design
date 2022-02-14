import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import PaymentOneThreePageButton from './PaymentOneThreePageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput/>
            <PaymentOneThreePageButton
            text='확인'
            //onPress={()=>navigation.navigate('PaymentOneThree')}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;