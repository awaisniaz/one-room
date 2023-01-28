/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// eslint-disable-next-line prettier/prettier

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import SVGImg from './assets/icons/logo.svg'
import SplachScreen from './assets/icons/splashscreen.svg'



function App() {

  return (
    <SafeAreaView style={{ flex: 1 }
    }>
      <StatusBar hidden={true}></StatusBar>
      < View style={styles.sectionContainer} >
        <SVGImg width={100} height={100} />
        <SplachScreen />
      </View >
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#E95228',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 50

  },
  statusbarcolor: {
    backgroundColor: '#E95228',
  },
  logo: {
    height: 100,
    width: 100
  }

});

export default App;
