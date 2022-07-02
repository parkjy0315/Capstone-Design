import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import SvgQRCode from 'react-native-qrcode-svg';

const MyView = styled.SafeAreaView`
  align-items: center;
  background-color: #ecf0f1;
  position:absolute;
  z-index:3;
  top:38%;
  left:35.5%;
`;

function Simple(props) {
  return <SvgQRCode 
          value={JSON.stringify(props.props.value)}
          size={70}
  />
}
function QRarea(props) {
  return (
    <MyView style={styles.container}>
      <View
        style={{
          width: 60,
          height: 60,
          flexDirection: 'row',
          backgroundColor:'white',
          alignItems: 'center',
        }}>
        <Simple props={props}/>
      </View>

      {/*<CustomQRCodes />*/}
    </MyView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default QRarea;