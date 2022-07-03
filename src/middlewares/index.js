import products from '../middlewares/Products';
import user from '../middlewares/SignUp';
import authUser from '../middlewares/Login';
import confirmation from '../middlewares/ConfirmAccount';

export default [
  products,
  user,
  authUser,
  confirmation
];
