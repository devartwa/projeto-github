import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import StackApp from './routes';

export default function App(){

  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#333333" />
        <StackApp />
    </>
  );
}
