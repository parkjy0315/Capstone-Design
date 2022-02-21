import React from 'react';
import styled from 'styled-components/native';
import NoticeContainer from '../components/NoticeComponents/NoticeContainer';
import NoticeBottomNavList from '../components/NoticeComponents/NoticeBottomNavList';
import NoticeTopSmallContainer from '../components/NoticeComponents/NoticeTopSmallContainer';

import MiddleContainer from '../components/NoticeComponents/MiddleContainer';



function Notice(){
    return(
        <NoticeContainer>
            <NoticeTopSmallContainer/>

            <MiddleContainer/>

            <NoticeBottomNavList/>
        </NoticeContainer>
    );
}

export default Notice;