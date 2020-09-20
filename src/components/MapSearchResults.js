import React from 'react';
import { Text } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';
import mapSearchResultsStyles from '../styles/MapSearchResultsStyles';
import { FontAwesome } from '@expo/vector-icons';
import store from '../store/store';
import { getSelectedAddress } from '../actions/mapActions';
import { useDispatch } from 'react-redux';



export default function MapSearchResults() {
  const dispatch = useDispatch()
  // const searchPredictions = 

  const handleGetSelectedAddress = (placeId) => {
    getSelectedAddress(dispatch, placeId, {
      resultType: {
        pickUp: false,
        dropOff: false
      }
    })
  }
  return (
    <View style={mapSearchResultsStyles.searchResultsWrapper} >
      <List 
        dataArray={store.getState.addressPredictions.addressPredictions}
        renderRow={(prediction) => {
          <View>
            <ListItem onClick={() => handleGetSelectedAddress(prediction.placeId)} button avatar>
              <Left style={mapSearchResultsStyles.leftContainer}>
                <FontAwesome style={mapSearchResultsStyles.leftIcon} name='map-marker' />
              </Left>
              <Body>
                <Text style={mapSearchResultsStyles.primaryText}>{prediction.secondaryText}</Text>
                <Text style={mapSearchResultsStyles.secondaryText}>{prediction.secondaryText}</Text>
              </Body>
            </ListItem>
          </View>
        }}>
        <ListItem><Text>List item 2</Text></ListItem>
      </List>
    </View>
  )
}