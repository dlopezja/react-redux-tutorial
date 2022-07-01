import login from './Login';
import products from './Products';
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
  login,
  products,
});


export default rootReducer;
