/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// eslint-disable-next-line prettier/prettier

import React from 'react';
import type { PropsWithChildren } from 'react';
import { SvgUri } from 'react-native-svg';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App() {

  return (
    <SafeAreaView style={{ flex: 1 }
    }>
      <StatusBar hidden={true}></StatusBar>
      < View style={styles.sectionContainer} >
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
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
    alignItems: "center"

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
