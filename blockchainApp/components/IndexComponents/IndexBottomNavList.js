import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';
//첫 버튼 (홈)
import IndexBottomHomeButton from './IndexBottomHomeButton';
import IndexBottomOfficialButton from './IndexBottomOfficialButton';
import IndexBottomMarketButton from './IndexBottomMarketButton';
import IndexBottomUseListButton from './IndexBottomUseListButton';

import {useNavigation} from '@react-navigation/native';

const Container = styled.SafeAreaView`
    width:95%;
    height:5%;
    background-color:white;
    margin: 0 auto;
    border:1px solid gray;
    border-radius:7px;
    flex-direction:row;
`;



function IndexBottomNavList(){
    const navigation = useNavigation();
    return(
        <Container>
            
            <IndexBottomHomeButton onPress={()=>navigation.navigate('Index')}/>
            <IndexBottomOfficialButton onPress={()=>navigation.navigate('Notice')}/>
            <IndexBottomMarketButton onPress={()=>navigation.navigate('Franchisee')}/>
            <IndexBottomUseListButton onPress={()=>navigation.navigate('UsageHistory')}/>
        </Container>
    );
}

export default IndexBottomNavList;