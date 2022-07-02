import React from 'react';

import PaymentOneTwoContainer from '../components/PaymentOneTwoComponents/PaymentOneTwoContainer';
import PaymentOneTwoTopSmallContainer from '../components/PaymentOneTwoComponents/PaymentOneTwoTopSmallContainer';
import TopMiddleText from '../components/PaymentOneTwoComponents/TopMiddleText';
import InputAndConfirmBtn from '../components/PaymentOneTwoComponents/InputAndConfirmBtn';
import MiddlePriceContainer from '../components/PaymentOneTwoComponents/MiddlePriceContainer';
import BottomContainer from '../components/PaymentOneTwoComponents/BottomContainer';
import { Alert } from "react-native";


function PaymentOneTwo({navigation,route}){
    console.disableYellowBox = true;
    const dataSet = route.params.data;
    const [Amount,setAmount] = React.useState(0);
    function AllCheckOkGoNextPage(Amount){
        if(Amount !== '' && Amount > 0){
            dataSet['amount'] = Amount.toString();
            navigation.navigate('PaymentOneThree',{data:dataSet});
        }else{
            //alert
            Alert.alert(
                "",
                "결제할 금액을 입력하세요(0 HSC 이상)",
                [
                    {
                        text: "확인",
                        onPress: () => console.log('사용불가능'),
                        style:"cancel"
                    }
                ],
                { cancelable: false}
            );
            //alert
            console.log('송금할 금액을 입력하세요');
            return false;
        }
    }
    

    function addAmount(addingAmount){
        
        if(isNaN(Amount) || isNaN(parseInt(Amount))){
            setAmount(addingAmount.toString());
        }else{
            setAmount((parseInt(Amount)+addingAmount).toString());
        }
    }


    return (
        <PaymentOneTwoContainer>
            {/*맨위 로고와 결제 텍스트를 담은 컴포넌트 */}
            <PaymentOneTwoTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn 
                value = {Amount}
                onChangeText={(value)=>{setAmount(value)}}
                onPress={()=>{AllCheckOkGoNextPage(Amount)}}
            />
            
            <MiddlePriceContainer onPress={addAmount}/>

            <BottomContainer/>

        </PaymentOneTwoContainer>
    );
}

export default PaymentOneTwo;