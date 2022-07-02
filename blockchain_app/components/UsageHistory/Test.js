import React,{Component} from 'react';
import DatePicker from 'react-native-datepicker'
import {StyleSheet,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        opacity:0,
        position:'absolute',
        justifyContent:'center',
        zIndex:1,
        elevation:1,
        width:'100%',
    }
})


function Test(props){
    const store = async (date)=>{
        await AsyncStorage.setItem('searchHistoryDate',date);
    }

    const [date,setState] = React.useState('');
    
    return (
            <DatePicker
                style={styles.container}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1950-05-01"
                maxDate="2030-05-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                    },
                    dateInput: {
                    marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                    store(date);
                    props.getDateChange;
                }}
                />
    )
}
  

export default Test;