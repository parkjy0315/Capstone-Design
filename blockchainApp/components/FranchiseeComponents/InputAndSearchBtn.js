import React from 'react';
import styled from 'styled-components/native';
import LongContainer from './LongContainer';
import FranchiseePageButton from './FranchiseePageButton';
import PTInput from './PTInput';
import {useNavigation} from '@react-navigation/native';

function InputAndSearchBtn(){
    const navigation = useNavigation();
    return(
        <LongContainer>
            <PTInput text='가맹점 검색'/>
            <FranchiseePageButton
            //onPress={()=>navigation.navigate('PaymentOneThree')}
            />
            
        </LongContainer>
    );
}

export default InputAndSearchBtn;