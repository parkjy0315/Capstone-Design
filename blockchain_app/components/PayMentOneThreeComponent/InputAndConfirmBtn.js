import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import PaymentOneThreePageButton from './PaymentOneThreePageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(props){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput onChangeText={props.onChangeText}/>
            <PaymentOneThreePageButton
            text='확인'
            onPress={props.onPress}
            //onPress={()=>navigation.navigate('PaymentOneThree')}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;