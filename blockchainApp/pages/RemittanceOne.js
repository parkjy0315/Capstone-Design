import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';


import RemittanceOneContainer from '../components/RemittanceOneComponents/RemittanceOneContainer';
import RemittanceOneBottomMyInfo from '../components/RemittanceOneComponents/RemittanceOneBottomMyInfo';
import RemittanceOneMiddleFriendList from '../components/RemittanceOneComponents/RemittanceOneMiddleFriendList';
import RemittanceOneTopSmallContainer from '../components/RemittanceOneComponents/RemittanceOneTopSmallContainer';

import InputAndConfirmBtn from '../components/RemittanceOneComponents/InputAndConfirmBtn';
import TopMiddleText from '../components/RemittanceOneComponents/TopMiddleText';
//index.js 에 쓰인 Text
const Text = styled.Text`
    font-size : 20px;
    line-height:20px;
`;


function RemittanceOne({navigation}){
    
    return(
        <RemittanceOneContainer>

            <RemittanceOneTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn/>
                

            <RemittanceOneMiddleFriendList/>
            
            <RemittanceOneBottomMyInfo/>

        </RemittanceOneContainer>
    );
};


export default RemittanceOne;