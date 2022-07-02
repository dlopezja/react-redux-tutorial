import signup from './SignUp';
import products from './Products';
import login from './Login';
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  signup,
  products,
  login
});


export default rootReducer;