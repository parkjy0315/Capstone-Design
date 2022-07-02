import * as React from 'react'
import {View, StyleSheet, Button} from 'react-native';
import {Video} from 'expo-av';

function LoginAni({navigation, route}) {
    console.disableYellowBox = true;
    //var dataSet = route.params.data;
    //console.log(`PaymentOneThree 넘어온값 : ${JSON.stringify(dataSet)}`);
    const video = React.useRef(null);
    const styles = StyleSheet.create({
        video: {
            alignSelf: 'center',
            width : '50%',
            height : '50%'
        },
        container: {
            width : '100%',
            height : '100%',
            justifyContent:'center',
            backgroundColor:'white'
        }
    })
    async function loginAni(){
        video.current.playAsync()
        let promise = new Promise((resolve) => {
            setTimeout(resolve, 5300);
        });
        let ani = await promise;
        navigation.navigate('Index')
    }

    return (
        <View style={styles.container}>
            <Video
            ref = {video}
            style = {styles.video}
            source={require("../image/MP4_login.mp4")}
            onLoadStart={()=> loginAni()}
            resizeMode = "contain"
            // onPlaybackStatusUpdate={() => navigation.navigate('Index')}
        />
        </View>
    )
}

export default LoginAni;