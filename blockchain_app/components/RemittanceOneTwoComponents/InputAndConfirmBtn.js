import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import RemittanceOneTwoPageButton from './RemittanceOneTwoPageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(props){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput 
                onChangeText={props.onChangeText}
                value = {props.value}
            />
            <RemittanceOneTwoPageButton
            text='확인'
            onPress={props.onPress}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;