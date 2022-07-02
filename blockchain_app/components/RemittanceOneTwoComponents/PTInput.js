import {Platform,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.SafeAreaView`
    width:65%;
    position:relative;
`;

const HSCText = styled.SafeAreaView`
    width:30%;
    height:30%;
    position:absolute;
    left:82%;
    top:13%;
`;

const Input = styled.TextInput`
    width: 100%;
    background-color:white;
    border-radius : 8px;
    border : 1px solid #666666;
    padding: 4px;
    font-size:20px;
    margin-left:3%;
    margin-bottom:15%;
`;

function PTInput(props){
    return (
        <Container>
            <Input 
            style={styles.shadow}
            //
            onChangeText={props.onChangeText}
            value={props.value}
            //
            placeholder={props.text}
            keyboardType="number-pad"
            >
            </Input>
            <HSCText>
                <Text>HSC</Text>
            </HSCText>
        </Container>
    )
}
export default PTInput;



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