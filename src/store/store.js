import { applyMiddleware, createStore  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers";
import middlewares from '../middlewares';

const store = createStore(
  rootReducer,
  // used composeWithDevTools to see the store in chrome (redux devtools)
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;