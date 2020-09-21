import React from 'react';
import { Text, Image } from 'react-native';
import { Header, Container, Left, Body, Right, Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import headerStyles from '../styles/HeaderStyles';
// import { Header } from 'react-native-elements'

export default function HeaderComponent() {
  return (
    <Header style={headerStyles.container} iosBarStyle='light-content'>
      <Left>
      </Left>
      <Body>
        <Text style={headerStyles.headerText}>SendIt!</Text>
      </Body>
      <Right>
      </Right>
    </Header> 
  )
}