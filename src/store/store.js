import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import middlewares from '../middlewares';
import productReducer from '../reducers/Products';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  productReducer,
  composeEnhancer(applyMiddleware(...middlewares,thunk)),
);

export default store;