import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import middlewares from "../middlewares";

const store = createStore(
  rootReducer,
  // used composeWithDevTools to see the store in chrome (redux devtools)
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;