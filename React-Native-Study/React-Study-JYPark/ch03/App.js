import React from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';



function App() {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaProvider stlye={styles.block}>
        {/*
        잘 적용이 안됌 
        <SafeAreaView edges={['bottom']}>
          <DateHead date={today}/>
        </SafeAreaView> 
        */}
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today}/>
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;