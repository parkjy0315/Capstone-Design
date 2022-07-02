import React from 'react';


import UsageHistoryContainer from "../components/UsageHistory/UsageHistoryContainer";
import UsageHistoryTopSmallContainer from '../components/UsageHistory/UsageHistoryTopSmallContainer';
import TopMenuListContainer from '../components/UsageHistory/TopMenuListContainer';
import TopMiddleDateContainer from '../components/UsageHistory/TopMiddleDateContainer';
import MiddleContainer from '../components/UsageHistory/MiddleContainer';
import UsageHistoryBottomNavList from '../components/UsageHistory/UsageHistoryBottomNavList';

function UsageHistory(){
    console.disableYellowBox = true;
    
    return(
        <UsageHistoryContainer>
            <UsageHistoryTopSmallContainer/>
            <TopMenuListContainer/>
            <TopMiddleDateContainer/>
            <MiddleContainer/>
            <UsageHistoryBottomNavList/>
        </UsageHistoryContainer>
    );
};

export default UsageHistory;