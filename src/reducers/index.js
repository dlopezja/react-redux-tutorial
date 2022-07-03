import login from './Login';
import products from './Products';
import users from './Users';
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
  login,
  products,
  users,
});


export default rootReducer;