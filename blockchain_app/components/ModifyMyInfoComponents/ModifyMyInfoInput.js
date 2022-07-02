import {Platform,StyleSheet} from 'react-native';
import styled from 'styled-components/native';


const Input = styled.TextInput`
    width: 63%;
    margin-left: 10%;
    background-color:white;
    border-radius : 8px;
    border : 1px solid #666666;
    padding: 4px;
    font-size:20px;
    margin-bottom:12px;
    
`;

function ModifyMyInfoInput(props){
    return (

        <Input 
        style={styles.shadow}
        onChangeText={props.onChangeText}
        placeholder={props.text + props.value}
        placeholderTextColor="#D3D3D3"
        >
        </Input>
    )
}
export default ModifyMyInfoInput;



const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:0,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
                fontWeight:'bold',
                
            },
            android : {
                elevation : 20,
            },
        })
    }
});