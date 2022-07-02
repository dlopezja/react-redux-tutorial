/*
import { applyMiddleware, createStore } from "redux";
import productsReducer from '../reducers/Products';
import userReducer from '../reducers/Login';
import middlewares from '../middlewares';

const reduceReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
const rootReducer = reduceReducers(userReducer, productsReducer);
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;

// create store with multiple reducers (help. composeReducers)
*/

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import middlewares from "../middlewares";

const store = createStore(
  rootReducer,
  // used composeWithDevTools to see the store in chrome (redux devtools)
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;