import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
import {Button} from 'react-native';
import PaymentOneContainer from '../components/PaymentOneComponents/PaymentOneContainer';
import PaymentOneTopSmallContainer from '../components/PaymentOneComponents/PaymentOneTopSmallContainer';
import PaymentOneMiddleText from '../components/PaymentOneComponents/PaymentOneMiddleText';

import PaymentOneBottomMyInfo from '../components/PaymentOneComponents/PaymentOneBottomMyInfo';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet } from 'react-native';

import { Alert } from "react-native";



//index.js 에 쓰인 Text
const Text = styled.Text`
    font-size : 20px;
    line-height:20px;
`;

//이부분은 PaymentOneTwo를 보기 위해 visible:false로 테두리 안에 QR코드를 스캔해주세요
//바로 밑부분에 놓은 컴포넌트
const GotoPaymentOneTwo = styled.TouchableOpacity`
    border:1px solid black;
    border-radius:15px;
    background-color:white;
    align-items:center;
    width:100px;
    padding-top:5px;
    height:30px;
    margin:0 auto;
`;

function PaymentOne({navigation}){
    console.disableYellowBox = true;
    
    const [hasPermission, setHasPermission] = React.useState(false);
    const [scanData, setScanData] = React.useState();

    useEffect(() => {
       (async() => {
          const {status} = await BarCodeScanner.requestPermissionsAsync();
          console.log(status==="granted");
          setHasPermission(status === "granted");
       })();
    },[]);

    if (!hasPermission) {
      return (
        <PaymentOneContainer>

        <PaymentOneTopSmallContainer/>
        {/*<Camera/>*/}

        <PaymentOneMiddleText/>
        
        {/*PaymentOneTwo로 가기위한 컴포넌트 나중에 지워야함 */}
        <GotoPaymentOneTwo onPress={()=>navigation.navigate('PaymentOneTwo')}/>

        <PaymentOneBottomMyInfo/>

    </PaymentOneContainer>

      )
    }

    const handleBarCodeScanned = ({type, data}) => {
        setScanData(data.substring(1,data.length-1));
    };    
    
    var dataSet = {
      'userid':'',
      'userpassword':'',
      'senderAddress':'',
      'recevierAddress':'',
      'amount':'',
    }

    function AllCheckOkGoNextPage(scanData){
      if(scanData!=='' && scanData !== undefined){
        dataSet["recevierAddress"] = scanData;
        navigation.navigate('PaymentOneTwo',{data:dataSet});
      }else{
        Alert.alert(
          "결제 실패",
          "QR인식실패",
          [
              {
                  text: "확인",
                  onPress: () => console.log('사용불가능'),
                  style:"cancel"
              }
          ],
          { cancelable: false}
      );

        console.log('scanData 든게 없습니다. Paymentone내부 오류');
        return false;
      }
      
    }

    
    return(
        <PaymentOneContainer>

            <PaymentOneTopSmallContainer/>
            <BarCodeScanner 
                style = {{height: 300,width: '80%',marginLeft:'10%',marginRight:'10%',borderRadius:50}}
                onBarCodeScanned= {scanData ? undefined : handleBarCodeScanned}
            />
            {scanData && <Button title = 'Scan Again?' onPress={() => setScanData(undefined)}/>}

            <PaymentOneMiddleText/>
            
            {/*PaymentOneTwo로 가기위한 컴포넌트 나중에 지워야함 */}
            <GotoPaymentOneTwo onPress={()=>{AllCheckOkGoNextPage(scanData)}}><Text>SCAN</Text></GotoPaymentOneTwo>

            <PaymentOneBottomMyInfo/>

        </PaymentOneContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PaymentOne;