import React from 'react';
import Drawer from './navigation/Drawer';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  return (
    <Drawer></Drawer>
  );
};

export default App;
