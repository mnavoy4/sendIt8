import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userInfo)
    return (
      <View style={{justifyContent: 'center'}} >
        <Text>Hello {userInfo.user} </Text>
      </View>
    );
  }