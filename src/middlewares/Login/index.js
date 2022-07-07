import actions from '../../actions/Login';
import api from '../../api/Login';
import cookieService from '../../Services/CookieService';

async function authUser(dispatch, action) {

    const response = await api.loginCognito(action.payload);
    
    if (!response.hasOwnProperty('response')) {
      cookieService.saveCookie('user', response);
      dispatch(actions.LOGIN(response)); 
    } else {
      dispatch(actions.ERROR(response));
    }

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