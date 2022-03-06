import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {Platform,StyleSheet} from 'react-native';


const width = Dimensions.get('window').width;
const height = Math.floor(Dimensions.get('window').height);



const Container = styled.SafeAreaView`
    width:${width}px;
    height:${height}px;
    background-color:white;
`;

export default Container;