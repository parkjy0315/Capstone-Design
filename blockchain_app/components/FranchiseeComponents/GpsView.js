import React from 'react';
import styled from 'styled-components/native';
import {Text,StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';
import axios from 'axios';

const Container = styled.SafeAreaView`
    width:100%;
    height:100%;
    background-color:white;
    border-radius:7px;
`;
    

function GpsView(props) { 
    axios({
        method:"GET",
        url: `http://220.67.231.91:80/getGpsInfo`,
    }).then((data)=>{
        
        return data;
    })


    //미래관
    const mirae = {
        latitude:  37.58263272, 
        longitude: 127.01069909,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    AsyncStorage.setItem('miraeInformation',JSON.stringify({'latitude':mirae.latitude,'longitude': mirae.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('미래관 위치 저장 완료');
        }
    });

    //상상관
    const sangsang = {
        latitude: 37.582638, 
        longitude: 127.010081,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('sangsangInformation',JSON.stringify({'latitude':sangsang.latitude,'longitude': sangsang.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('상상관 위치 저장 완료');
        }
    });

    //탐구관
    const tamgu = {
        latitude: 37.58348455, 
        longitude: 127.00921792,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('tamguInformation',JSON.stringify({'latitude':tamgu.latitude,'longitude': tamgu.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('탐구관 위치 저장 완료');
        }
    });


    //연구관
    const yaen = {
        latitude: 37.58230697, 
        longitude: 127.00982730,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('yaenInformation',JSON.stringify({'latitude':yaen.latitude,'longitude': yaen.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('연구관 위치 저장 완료');
        }
    });

    //공학관1
    const gongA = {
        latitude: 37.581841, 
        longitude: 127.009851,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('gongAInformation',JSON.stringify({'latitude':gongA.latitude,'longitude': gongA.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('공학관A 저장 완료');
        }
    });

    //공학관2
    const gongB = {
        latitude: 37.581577, 
        longitude: 127.009554,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('gongBInformation',JSON.stringify({'latitude':gongB.latitude,'longitude': gongB.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('공학관B 위치 저장 완료');
        }
    });

    //상상빌리지
    const sangVill = {
        latitude: 37.58157236,
        longitude: 127.00981972,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('sangVillInformation',JSON.stringify({'latitude':sangVill.latitude,'longitude': sangVill.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('상상빌리지 저장 완료');
        }
    });

    //진리관
    const jinli = {
        latitude: 37.583005, 
        longitude: 127.009557,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('jinliInformation',JSON.stringify({'latitude':jinli.latitude,'longitude': jinli.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('상상관 위치 저장 완료');
        }
    });
    //우촌관
    const uchon = {
        latitude: 37.583049, 
        longitude: 127.010657,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('sangsangInformation',JSON.stringify({'latitude':uchon.latitude,'longitude': uchon.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('상상관 위치 저장 완료');
        }
    });
    //낙산관
    const naksan = {
        latitude: 37.58214165, 
        longitude: 127.01132480,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('naksanInformation',JSON.stringify({'latitude':naksan.latitude,'longitude': naksan.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('낙산관 위치 저장 완료');
        }
    });
    //창의관
    const chang = {
        latitude: 37.5821, 
        longitude: 127.0108,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    AsyncStorage.setItem('changInformation',JSON.stringify({'latitude':chang.latitude,'longitude': chang.longitude}), (err) => {
        if(err){
            return false;
        }else{
            console.log('상상관 위치 저장 완료');
        }
    });





    const [current_latitude, setCLatitude] =  React.useState(37.58214165);
    const [current_longitude, setCLongitude] =  React.useState(127.01132480);

    AsyncStorage.getItem('SearchLocationInfo', (err, result) => {
        const SearchLocation = JSON.parse(result);
        console.log(SearchLocation.latitude, SearchLocation.longitude);

        setCLatitude(Number(SearchLocation.latitude));
        setCLongitude(Number(SearchLocation.longitude));
      });
      
    const HansungUnvRegion = {
        latitude: current_latitude,
        longitude: current_longitude,
        latitudeDelta: 0.0015,
        longitudeDelta: 0.0015,
    };

    return (
        <Container>
            <MapView
            style={styles.map}
            //specify our coordinates.
            showUserLocation={true}
            region={HansungUnvRegion}
            >
                {/*<Marker coordinate={tokyoRegion} />*/}
                
                {/* 미래관 */}
                <Marker
                    coordinate = {mirae}
                    title="미래관"
                    description="지하 1층 : 프린트"
                />
                {/* 탐구관 */}
                <Marker
                    coordinate={tamgu}
                    title="탐구관"
                    description="2층 : 프린트"
                />

                {/* 상상관 */}
                <Marker
                    coordinate = {sangsang}
                    title="상상관"
                    description="상상관 서비스"
                />
                {/* 창의관 */}
                <Marker
                    coordinate = {chang}
                    title="창의관"
                    description="창의관 서비스"
                />
                {/* 연구관 */}
                <Marker
                    coordinate={yaen}
                    title="연구관"
                    description="3층 그라찌에"
                />                
                {/* 공학관 A */}
                <Marker
                    coordinate = {gongA}
                    title="공학관 A동"
                    description="1층 : 프린트"
                />
                {/* 공학관 B */}
                <Marker
                    coordinate={gongB}
                    title="공학관 B동"
                    description="1층 : 코딩라운지"
                />

                {/* 상상빌리지 */}
                <Marker
                    coordinate = {sangVill}
                    title="상상빌리지"
                    description="지하 1층 : 세탁기"
                />
                {/* 낙산관 */}
                <Marker
                    coordinate={naksan}
                    title="낙산관"
                    description="1층 : 체육관"
                />
                {/* 진리관 */}
                <Marker
                    coordinate={jinli}
                    title="진리관"
                    description="1층 : 체육관"
                />
                {/* 우촌관 */}
                <Marker
                    coordinate={uchon}
                    title="우촌관"
                    description="1층 : 체육관"
                />


            </MapView>
        </Container>
    ); 
}

export default GpsView;

//create our styling code:
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });