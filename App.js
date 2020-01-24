import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreenRouter from './screens/index';


const App = () => {
  return (
    <SafeAreaProvider >
      <StatusBar barStyle="dark-content" />
      <MainScreenRouter />
    </SafeAreaProvider>
  );
};


export default App;
