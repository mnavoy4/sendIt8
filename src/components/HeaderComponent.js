import React from 'react';
import { Text, Image } from 'react-native';
import { Header, Container, Left, Body, Right, Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import headerStyles from '../styles/HeaderStyles';
// import { Header } from 'react-native-elements'

export default function HeaderComponent() {
  return (
    <Header style={headerStyles.container}>
      <Left>
          <Button transparent>
            <FontAwesome name='bars' style={headerStyles.icon} />
            <Text>Some Text</Text>
          </Button>
        </Left>
        <Body>
          <Text>Some Text</Text>
        </Body>
        <Right>
          <Button transparent>
            <FontAwesome name='gift' style={headerStyles.icon} />
          </Button>
        </Right>
      </Header> 
  )
}