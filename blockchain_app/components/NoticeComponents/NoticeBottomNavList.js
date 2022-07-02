import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';
//첫 버튼 (홈)
import NoticeBottomHomeButton from './NoticeBottomHomeButton';
import NoticeBottomOfficialButton from './NoticeBottomOfficialButton';
import NoticeBottomMarketButton from './NoticeBottomMarketButton';
import NoticeBottomUseListButton from './NoticeBottomUseListButton';

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


function NoticeBottomNavList(){
    const navigation = useNavigation();
    return(
        <Container style={styles.shadow}>
            <NoticeBottomHomeButton onPress={()=>navigation.navigate('Index')}/>
            <NoticeBottomOfficialButton onPress={()=>navigation.navigate('Notice')}/>
            <NoticeBottomMarketButton onPress={()=>navigation.navigate('Franchisee')}/>
            <NoticeBottomUseListButton onPress={()=>navigation.navigate('UsageHistory')}/>
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

export default NoticeBottomNavList;