import React from 'react';
import RemittanceOneTwoContainer from '../components/RemittanceOneTwoComponents/RemittanceOneTwoContainer';
import RemittanceOneTwoTopSmallContainer from '../components/RemittanceOneTwoComponents/RemittanceOneTwoTopSmallContainer';
import TopMiddleText from '../components/RemittanceOneTwoComponents/TopMiddleText';
import InputAndConfirmBtn from '../components/RemittanceOneTwoComponents/InputAndConfirmBtn';
import MiddlePriceContainer from '../components/RemittanceOneTwoComponents/MiddlePriceContainer';
import BottomContainer from '../components/RemittanceOneTwoComponents/BottomContainer';
import { Alert } from "react-native";

function RemittanceOneTwo({navigation,route}){
    console.disableYellowBox = true;
    const dataSet = route.params.data;
    const [Amount,setAmount] = React.useState("");
    function AllCheckOkGoNextPage(Amount){
        if(Amount !== '' && Amount > 0 && Amount !== '0'){
            dataSet['amount'] = Amount;
            navigation.navigate('RemittanceOneThree',{data:dataSet});
        }else{
            //alert
            Alert.alert(
                "",
                "송금할 금액을 입력하세요(0 HSC 이상)",
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
        <RemittanceOneTwoContainer>
            {/*맨위 로고와 결제 텍스트를 담은 컴포넌트 */}
            <RemittanceOneTwoTopSmallContainer/>

            <TopMiddleText/>

            <InputAndConfirmBtn
                value = {Amount}
                onChangeText={(value)=>{setAmount(value)}}
                onPress={()=>{AllCheckOkGoNextPage(Amount)}}
            />
            
            <MiddlePriceContainer onPress={addAmount}/>

            <BottomContainer/>

        </RemittanceOneTwoContainer>
    );
}

export default RemittanceOneTwo;