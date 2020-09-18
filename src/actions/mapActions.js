import { GET_CURRENT_LOCATION_SUCCESS, GET_CURRENT_LOCATION_REQUEST } from '../constants/mapConstants';

const getCurrentLocation = (dispatch, latitudeDelta, longitudeDelta) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ 
          type: GET_CURRENT_LOCATION_SUCCESS,
          payload: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta,
            longitudeDelta
          }})
      },
      (error) => console.log(error.message), {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };

export { getCurrentLocation }