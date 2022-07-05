import actions from '../../actions/Login';
import api from '../../api/Login';

async function authUser(dispatch, action) {
  const response = await api.loginCognito(action.payload);
  localStorage.setItem("token", response);
  dispatch(actions.USER(response));      
  return response;
}
  
export default function userMiddleware(store) {
  const { dispatch } = store;
  return (next) => async (action) => {
    console.log("from middleware", action)
    switch(action.type) {
      case actions.AUTH_USER().type:
        await authUser(dispatch, action);
        break;

      default:
        next(action);
        break;
    }
  }
}