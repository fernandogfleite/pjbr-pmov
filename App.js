import 'react-native-gesture-handler';
import React from 'react';
import Stack from './navigation/Stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  return (
    <Stack></Stack>
  );
};

export default App;
