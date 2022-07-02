import React from 'react';
import NoticeContainer from '../components/NoticeComponents/NoticeContainer';
import NoticeBottomNavList from '../components/NoticeComponents/NoticeBottomNavList';
import NoticeTopSmallContainer from '../components/NoticeComponents/NoticeTopSmallContainer';

import MiddleContainer from '../components/NoticeComponents/MiddleContainer';



function Notice({navigation}){
    console.disableYellowBox = true;
    return(
        <NoticeContainer>
            <NoticeTopSmallContainer/>

            <MiddleContainer/>

            <NoticeBottomNavList/>
        </NoticeContainer>
    );
}

export default Notice;