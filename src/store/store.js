import { applyMiddleware, createStore } from "redux";
import productsReducer from '../reducers/Products';

import middlewares from '../middlewares';

const store = createStore(
  productsReducer,
  applyMiddleware(...middlewares)
);

export default store;

// create store with multiple reducers (help. composeReducers)