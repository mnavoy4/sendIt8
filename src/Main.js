import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Button, Text } from 'react-native';
import Home from './components/Home';

export default function Main() {

  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userInfo)

  const handleLogin = () => {
    dispatch({type: 'LOGIN', payload: { user: 'michael', friends: 3 }});
    console.log('hello');
  }

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' })
  // }
  return(
    <>
    <View style={styles.container}>
      <Button title='Login' onPress={handleLogin} />
      <Home />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center'
  }
})