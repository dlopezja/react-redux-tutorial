import actions from '../../actions/Login';
import api from '../../api/Login';

async function fetchUsers(dispatch) {
    try {
      const response = await api.login();
      dispatch(actions.SET_USERS(response));
      return response;
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
  
  export default function productsMiddleware(store) {
    const { dispatch } = store;
    return (next) => async (action) => {
      switch(action.type) {
        case actions.FETCH_USER().type:
          await fetchUsers(dispatch);
          break;
  
        default:
          next(action);
          break;
      }
    }
  }