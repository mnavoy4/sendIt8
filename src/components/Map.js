import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getCurrentLocation } from '../actions/mapActions.js';
import MapSearchBox from '../components/MapSearchBox';


export default function Map() {

  const region = useSelector(state => state.region);

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentLocation(dispatch, LATITUDE_DELTA, LONGITUDE_DELTA)
  }, []); 

  return (
    <View styles={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={region}
      >
        <MapView.Marker coordinate={region} pinColor='green' />
      </MapView>
      <MapSearchBox />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});