import products from '../middlewares/Products';
import user from '../middlewares/SignUp';
import authUser from '../middlewares/Login';

export default [
  products,
  user,
  authUser
];
