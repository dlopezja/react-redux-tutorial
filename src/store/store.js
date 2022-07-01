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