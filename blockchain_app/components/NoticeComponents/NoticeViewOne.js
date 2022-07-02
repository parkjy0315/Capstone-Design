import React from 'react';
import styled from 'styled-components/native';
import QRarea from './QRarea';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform ,Clipboard, StyleSheet,Image} from 'react-native';
import {Video} from 'expo-av'


const Container = styled.TouchableOpacity`
    width:70%;
    height:75%;
    background-color:white;
    border-radius:7px;
    border:0.5px solid gray;
    margin:0 auto;
    margin-bottom:10%;
`;

function NoticeViewOne(props){
    const video = React.useRef(null);
    const [accountAddress,setAccountAddress] = React.useState('');
    AsyncStorage.getItem('userinformation', (err, result) => {
        const UserInfo = JSON.parse(result);
        
        setAccountAddress(UserInfo.userAccount);
      });

    function saveAddressToClipBoard(){
        Clipboard.setString(accountAddress);
    }

    return(
        <Container style={props.style} onPress={()=>{saveAddressToClipBoard()}}>
            <Video source={require('../../image/LoginPageImage/MP4_movering.mp4')}
                ref = {video}
                style={styles.image}
                onLoadStart={() => video.current.playAsync() }
                resizeMode = "contain"
                isLooping
            />
            
            <QRarea value={accountAddress}/>
            
        </Container>
   );
}


const styles = StyleSheet.create({
    image :{
        width: '100%',
        height:'100%'
    }
});

export default NoticeViewOne;