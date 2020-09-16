import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { HomeReducer, userInfoReducer } from '../reducers/HomeReducer';

const log = createLogger({ diff: true, collapsed: true });

const initialState = {};
const middleware = [thunk, log];
const enhancers = [];
const reducer = combineReducers({
  home: HomeReducer,
  userInfo: userInfoReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware, ...enhancers)));

export default store
