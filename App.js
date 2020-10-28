import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './src/commons/navigator';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Navigator />
    </>
  );
};

export default App;
