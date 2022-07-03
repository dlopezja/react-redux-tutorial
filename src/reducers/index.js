import signup from './SignUp';
import products from './Products';
import login from './Login';
import confirm from './ConfirmAccount';
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  signup,
  products,
  login,
  confirm
});


export default rootReducer;