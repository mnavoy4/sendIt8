// import update from 'react-addons-update';
// import constants from './actionConstants';

// const {} = constants;

const initialState = {};
const ACTION_HANDLERS = {

}

function userInfoReducer(state={}, action){
  switch (action.type){
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT': 
      return {};
    default: 
      return state
  }
}

function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
} 

export { HomeReducer, userInfoReducer }