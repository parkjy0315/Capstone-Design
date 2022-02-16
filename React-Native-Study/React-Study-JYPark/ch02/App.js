/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * 
 */

import React, { useState } from 'react';
//import Greeting from './components/Greeting'
//import Box from './components/Box';
import { SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  // const [visible, setVisible] = useState(true);
  // const onPress = () => {
  //   setVisible(!visible);
  // };

  // return (
  //   <SafeAreaView>
  //     <Box rounded={true} size="large" color="blue"/>
  //     <Box rounded={false} size="medium" color="red"/>
  //     <Box rounded={true} size="small"/>
  //     <Button title="토글" onPress={onPress} />
  //     {visible && <Box rounded={true} size="large" color="blue"/>}
  //   </SafeAreaView>
  // )

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    //backgroundColor: 'yellowgreen',
  },
});



export default App;
