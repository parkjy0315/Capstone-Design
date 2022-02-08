import {Platform,StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size : 20px;
    font-weight : bold;
    margin-bottom:12px;
`;

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

function RegistInput(props){
    return (
        <Input 
        style={styles.shadow}
        placeholder={props.text}
        ></Input>
    )
}
export default RegistInput;



const styles = StyleSheet.create({
    shadow : {
        ...Platform.select({
            ios : {
                shadowColor : '#95B3D7',
                shadowOffset: {width:0,height:10},
                shadowOpacity: 0.5,
                shadowRadius:2.8,
            },
            android : {
                elevation : 20,
            },
        })
    }
});