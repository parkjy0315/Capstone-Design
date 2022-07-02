import {Platform,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.SafeAreaView`
    width:90%;
    margin-left:3%;
    position:relative;
    background-color:white;
    margin:0 auto;
`;

const Input = styled.TextInput`
    width: 100%;
    background-color:white;
    border-radius : 30px;
    border : 1px solid #666666;
    padding: 4px;
    font-size:20px;
    margin-bottom:10%;
    text-align:center;
`;

function PTInput(props){

    return (
        <Container>
            <Input 
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.text}
            >
            </Input>
            
        </Container>
    )
}
export default PTInput;



