import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import store from './src/store/store';
import Map from './src/components/Map';
import HeaderComponent from './src/components/HeaderComponent';
import FooterComponent from './src/components/Footer'
import CreateRide from './src/components/CreateRide';

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <HeaderComponent />
        <CreateRide />
        {/* <Map /> */}
        {/* <Main /> */}
        {/* <StatusBar style="auto" /> */}
      </View>
      <FooterComponent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
