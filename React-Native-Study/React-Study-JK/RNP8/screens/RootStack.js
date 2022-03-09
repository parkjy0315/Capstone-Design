import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return <Stack.Navigator>{}</Stack.Navigator>;
}

export default RootStack;
