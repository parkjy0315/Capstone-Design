import React from 'react';
import styled from 'styled-components/native';
import LongContainer_onlyforDatepicker from './LongContainer_onlyforDatepicker';
import UsageHistoryButtonLeft from "./UsageHistoryButtonLeft";
import UsageHistoryButtonRight from "./UsageHistoryButtonRight";
import axios from 'axios';
import { Alert } from "react-native";
const Label = styled.Text`
    margin: 0 auto;
`;

function getRank(){
    axios({
        method:"GET",
        url: `http://220.67.231.91:80/getUserRank`,
    }).then((data)=>{
        var userList = [];
        userList = data.data;
        var RankList = "";
        for(var i=0;i<userList.length;i++){
            RankList += (i+1)+"위 : "+userList[i].user + "  " + userList[i].balance+" HSC"+"\n";
        }

        //여기에서 순위를 alert로 출력

        Alert.alert(
            "HSC 보유순위",
            `${RankList}`,
            [
                {
                    text: "확인",
                    onPress: () => console.log('순위출력'),
                    style:"cancel"
                }
            ],
            { cancelable: false}
        );
        //여기에서 순위를 alert로 출력
        
    })
}


function TopMiddleDateContainer(){
    return(
        <LongContainer_onlyforDatepicker>
            <UsageHistoryButtonLeft text="이용내역"></UsageHistoryButtonLeft>
            <UsageHistoryButtonRight text="순위" onPress={()=>{getRank()}}></UsageHistoryButtonRight>
            
            {/*<Test getDateChange = {getDate()}/>*/}
            
        </LongContainer_onlyforDatepicker>
    );
}

export default TopMiddleDateContainer;