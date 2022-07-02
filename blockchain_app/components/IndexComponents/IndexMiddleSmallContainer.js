import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,Image,Text} from 'react-native';
import {Video} from 'expo-av'
const styles = StyleSheet.create({
    image :{
        width: '100%',
        height:'100%'
    },
});

const Container = styled.SafeAreaView`
    background-color:white;
    width:100%;
    height:100%;
    margin:0 auto;
    margin-top:9%;
`;

function IndexMiddleSmallContainer(){
    const video = React.useRef(null);
    return(
        <Container>
            <Video source={require('../../image/LoginPageImage/MP4_movering.mp4')}
            ref = {video}
            style={styles.image}
            onLoadStart={() => video.current.playAsync() }
            resizeMode = "contain"
            isLooping
            />
        </Container>
    )
}

export default IndexMiddleSmallContainer;



