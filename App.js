import React from 'react';

import Navigator from './src/commons/navigator';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <Navigator />
    </>
  );
}
