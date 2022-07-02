import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';

import IndexPageRemittanceButton from './IndexPageRemittanceButton';
import IndexPagePaymentButton from './IndexPagePaymentButton';

import { useNavigation } from '@react-navigation/native';


const Container = styled.SafeAreaView`
    flex-direction:column;
    width:23%;
    height:26%;
    background-color:white;
    margin:0 auto;
`;
function IndexRemittancePaymentButton(){
    const navigation = useNavigation(); 
    return(
        <Container>
            <IndexPageRemittanceButton onPress={()=>{navigation.navigate('RemittanceOne')}} text='송금'/>
            
            <IndexPagePaymentButton onPress={()=>{navigation.navigate('PaymentOne')}} text='결제'/>
        </Container>
    );
}

export default IndexRemittancePaymentButton;