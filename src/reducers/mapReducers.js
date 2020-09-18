import { GET_CURRENT_LOCATION_REQUEST, GET_CURRENT_LOCATION_SUCCESS } from '../constants/mapConstants';
const denver = {
    latitude: 39.7392,
    longitude: -104.9903,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

function regionReducer(state=denver, action) {
  switch(action.type) {
    case GET_CURRENT_LOCATION_SUCCESS:
      return action.payload;
    default:
      return state
  }
}

export { regionReducer }