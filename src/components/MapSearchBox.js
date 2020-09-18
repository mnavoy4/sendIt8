import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import mapSearchBoxStyles from '../styles/MapSearchBoxStyles';
import { FontAwesome } from '@expo/vector-icons';


export default function MapSearchBox() {
  return (
    <View style={mapSearchBoxStyles.searchBox}>
      <View style={mapSearchBoxStyles.inputWrapper}>
        <Text style={mapSearchBoxStyles.label}>PICK UP</Text>
        <InputGroup>
          <FontAwesome name='search' size={25} color='#FF53EA' />
          <Input style={mapSearchBoxStyles.inputSearch} placeholder="Choose pick-up location" />
        </InputGroup>
      </View>
      <View style={mapSearchBoxStyles.secondInputWrapper}>
        <Text style={mapSearchBoxStyles.label}>DROP OFF</Text>
        <InputGroup>
          <FontAwesome name='search' size={25} color='#FF53EA' />
          <Input style={mapSearchBoxStyles.inputSearch} placeholder="Choose drop-off location" />
        </InputGroup>
      </View>
    </View>
  )
}