import actions from '../../actions/Login';
import api from '../../api/Signup';

async function setUsers(dispatch, action) {
    try {
      const response = await api.signup();
      dispatch(actions.SET_USERS(action.payload));
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
  
  export default function usersMiddleware(store) {
    const { dispatch } = store;
    return (next) => async (action) => {
      switch(action.type) {
        case actions.FETCH_USER().type:
          await setUsers(dispatch);
          break;
  
        default:
          next(action);
          break;
      }
    }
  }