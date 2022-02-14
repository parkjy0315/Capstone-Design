import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import RemittanceOneThreePageButton from './RemittanceOneThreePageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndConfirmBtn(){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput/>
            <RemittanceOneThreePageButton
            text='확인'
            //onPress={()=>navigation.navigate('RemittanceOneThree')}
            />
            
        </LongContainer>
    );
}

export default InputAndConfirmBtn;