import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import Box from './components/Box';
//import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
