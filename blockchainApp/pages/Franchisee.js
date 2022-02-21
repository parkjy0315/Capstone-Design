import React from 'react';
import styled from 'styled-components/native';

import FranchiseeContainer from '../components/FranchiseeComponents/FranchiseeContainer';
import FranchiseeTopSmallContainer from '../components/FranchiseeComponents/FranchiseeTopSmallContainer';
import InputAndSearchBtn from '../components/FranchiseeComponents/InputAndSearchBtn';
import MiddleContainer from '../components/FranchiseeComponents/MiddleContainer';
import FranchiseeBottomNavList from '../components/FranchiseeComponents/FranchiseeBottomNavList';
function Franchisee(){
    return(
        <FranchiseeContainer>
            <FranchiseeTopSmallContainer/>
            <InputAndSearchBtn/>
            <MiddleContainer/>

            <FranchiseeBottomNavList/>
        </FranchiseeContainer>
    );
};

export default Franchisee;