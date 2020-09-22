// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store/store';
import Map from './src/components/Map';
import HeaderComponent from './src/components/HeaderComponent';
import FooterComponent from './src/components/Footer';
import CreateRide from './src/components/CreateRide';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/components/SignIn';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App() {
  return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HeaderComponent} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
    <Provider store={store} >
      <View style={styles.container}>
        <HeaderComponent />
        <SignIn />
        {/* <CreateRide /> */}
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
