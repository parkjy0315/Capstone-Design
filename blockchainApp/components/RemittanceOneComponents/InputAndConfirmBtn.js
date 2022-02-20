import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import RemittanceOneTwoPageButton from './RemittanceOneTwoPageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput/>
            <RemittanceOneTwoPageButton
            text='확인'
            onPress={()=>navigation.navigate('RemittanceOneTwo')}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;