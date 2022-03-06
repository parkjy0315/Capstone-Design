import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import NoticeViewOne from './NoticeViewOne';
import NoticeViewTwo from './NoticeViewTwo';

const Container = styled.SafeAreaView`
    width:90%;
    height:66%;
    
    margin:0 auto;
    border-radius:7px;
    margin-top:7%;
    margin-bottom:7%;
`;

function MiddleContainer(){
    return(
        <Container>
            <NoticeViewOne style={styles.shadow}/>
            <NoticeViewTwo style={styles.shadow}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:-5,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});

export default MiddleContainer;