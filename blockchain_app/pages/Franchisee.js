import React from 'react';
import FranchiseeContainer from '../components/FranchiseeComponents/FranchiseeContainer';
import FranchiseeTopSmallContainer from '../components/FranchiseeComponents/FranchiseeTopSmallContainer';
import InputAndSearchBtn from '../components/FranchiseeComponents/InputAndSearchBtn';
import MiddleContainer from '../components/FranchiseeComponents/MiddleContainer';
import FranchiseeBottomNavList from '../components/FranchiseeComponents/FranchiseeBottomNavList';
import AsyncStorage from '@react-native-async-storage/async-storage';


function saveLocation(name) {
    if (name === "미래관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58263272,'longitude': 127.01069909}), (err) => {
            if(err){
                return false;
            }else{
                console.log('미래관 위치');
            }
        });
    }
    else if (name === "상상관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.582638,'longitude': 127.010081}), (err) => {
            if(err){
                return false;
            }else{
                console.log('상상관 위치');
            }
        });
    }
    else if (name === "탐구관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58348455,'longitude': 127.00921792}), (err) => {
            if(err){
                return false;
            }else{
                console.log('탐구관 위치');
            }
        });
    }
    else if (name === "연구관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58230697,'longitude': 127.00982730}), (err) => {
            if(err){
                return false;
            }else{
                console.log('연구관 위치');
            }
        });
    }
    else if (name === "공학관A동"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.581841,'longitude': 127.009851}), (err) => {
            if(err){
                return false;
            }else{
                console.log('공학관 A동 위치');
            }
        });
    }
    else if (name === "공학관B동"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.581577,'longitude': 127.009554}), (err) => {
            if(err){
                return false;
            }else{
                console.log('공학관 B동 위치');
            }
        });
    }
    else if (name === "상상빌리지"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58157236,'longitude': 127.00981972}), (err) => {
            if(err){
                return false;
            }else{
                console.log('상상빌리지 위치');
            }
        });
    }
    else if (name === "낙산관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58214165,'longitude': 127.01132480}), (err) => {
            if(err){
                return false;
            }else{
                console.log('낙산관 위치');
            }
        });
    }
    else if (name === "진리관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.583005,'longitude': 127.009557}), (err) => {
            if(err){
                return false;
            }else{
                console.log('진리관 위치');
            }
        });
    }
    else if (name === "우촌관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.583049,'longitude': 127.010657}), (err) => {
            if(err){
                return false;
            }else{
                console.log('우촌관 위치');
            }
        });
    }
    else if (name === "창의관"){
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.5821,'longitude': 127.0108}), (err) => {
            if(err){
                return false;
            }else{
                console.log('창의관 위치');
            }
        });
    }
    else {
        AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.582410,'longitude': 127.009715}), (err) => {
            if(err){
                return false;
            }else{
                console.log('검색 X');
            }
        });
    }

    AsyncStorage.getItem('SearchLocationInfo', (err, result) => {
        
        
      });
}

function Franchisee(){

    console.disableYellowBox = true;

    const [isChanges, setIsChange] = React.useState("");

    function isChange(name){
        saveLocation(name)
        setIsChange(name);
    }

    return(
        <FranchiseeContainer>
            <FranchiseeTopSmallContainer/>
            <InputAndSearchBtn onPress={isChange}/>
            <MiddleContainer name={isChanges}/>

            <FranchiseeBottomNavList/>
        </FranchiseeContainer>
    );
};

export default Franchisee;