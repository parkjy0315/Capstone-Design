import React, { useState } from 'react';
import { Platform,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  width:100%;
  height:70%;
  background-color:yellow;
  border-radius:30px;
  border:1px solid #95B3D7;
`;

function DatePickerContainer() {

var dateText = Platform.OS === 'ios' ?
"                          YYYY년 MM월                      ▼":
"                                  YYYY년 MM월                              ▼";

  const [date, setDate] = useState('202203');
  return (
    <Container>
      
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          
          <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            //format="DD-MM-YYYY"
            format={dateText}
            minDate="01-01-2016"
            maxDate="01-01-2023"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                display:'none'
              },
              dateInput: {
                marginLeft: 0,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};
export default DatePickerContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius:200,
    overflow:'hidden',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
    borderColor:'white'
  },
  datePickerStyle: {
    width: '100%',
    marginTop: 0,
    borderColor:'white',
    color:'#95B3D7',
  },
  
}); 
