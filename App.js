/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {TimerGround} from "./components";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TimerGround />
    </SafeAreaView>
  );
};

export default App;
