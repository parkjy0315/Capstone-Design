import styled from 'styled-components/native';
import {Dimensions,Platform,StyleSheet} from 'react-native';

//const width = Dimensions.get('window').width;
//const height = (Platform.OS ==='ios') ? Dimensions.get('window').width : Math.floor(Dimensions.get('window').height * 0.2);

const Contents = styled.ScrollView`
    flex : 1;
    padding: 24px;
    background-color:white;
`;

export default Contents;