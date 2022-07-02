import React,{Component} from 'react';
import DatePicker from 'react-native-datepicker'
import styled from 'styled-components/native';
import {StyleSheet,Text} from 'react-native';

import { useEffect } from 'react/cjs/react.production.min';





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
    const [date,setState] = React.useState('');

    return (
            <DatePicker
                style={styles.container}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1950-05-01"
                maxDate="2022-05-01"
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
                //onDateChange={(date) => {setState(date)}}
                onDateChange={props.onDateChange}
                />
        
    )
}
  

export default Test;