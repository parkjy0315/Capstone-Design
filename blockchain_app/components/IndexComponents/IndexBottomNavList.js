import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';
//첫 버튼 (홈)
import IndexBottomHomeButton from './IndexBottomHomeButton';
import IndexBottomOfficialButton from './IndexBottomOfficialButton';
import IndexBottomMarketButton from './IndexBottomMarketButton';
import IndexBottomUseListButton from './IndexBottomUseListButton';

import {useNavigation} from '@react-navigation/native';
import { Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
const Container = styled.SafeAreaView`
    width:95%;
    height:5%;
    background-color:white;
    border:1px solid gray;
    border-radius:7px;
    flex-direction:row;

    position:absolute;
    top:${ScreenHeight*0.93}px;
    left:${ScreenWidth*0.02}px;
`;



function IndexBottomNavList(){
    const navigation = useNavigation();
    return(
        <Container style = {styles.shadow}>
            <IndexBottomHomeButton onPress={()=>navigation.navigate('Index')}/>
            <IndexBottomOfficialButton onPress={()=>navigation.navigate('Notice')}/>
            <IndexBottomMarketButton onPress={()=>navigation.navigate('Franchisee')}/>
            <IndexBottomUseListButton onPress={()=>navigation.navigate('UsageHistory')}/>
        </Container>
    );
}


const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:0,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});


export default IndexBottomNavList;