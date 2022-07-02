import React from 'react';
import LongContainer from './LongContainer';
import FranchiseePageButton from './FranchiseePageButton';
import PTInput from './PTInput';
import AsyncStorage from '@react-native-async-storage/async-storage';


function InputAndSearchBtn(props){
    const [svalue,setSValue] = React.useState("");
    AsyncStorage.setItem('SearchLocationInfo',JSON.stringify({'latitude':37.58,'longitude': 127.109715}), (err) => {
        if(err){
            console.log(err);
            return false;
        }else{ }
    });

    return(
        <LongContainer>
            <PTInput text='교내 편의시설 검색' onChangeText={(value)=>{setSValue(value);}}/>
            <FranchiseePageButton
                onPress={ props.onPress(svalue) }
            />
            
        </LongContainer>
    );
}

export default InputAndSearchBtn;