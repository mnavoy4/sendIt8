import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import Main from './src/Main';
import store from './src/store/store';
import Map from './src/components/Map'

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Map />
        {/* <Main /> */}
        <StatusBar style="auto" />
      </View>
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
