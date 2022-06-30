import actions from '../../actions/Products';
import api from '../../api/Products';

async function loginUsers(dispatch) {
  try {
    const response = await api.login();
    dispatch(actions.SET_USERS(response));
    return response;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default function usersMiddleware(store) {
  const { dispatch } = store;
  return (next) => async (action) => {
    switch(action.type) {
      case actions.SET_USERS().type:
        await loginUsers(dispatch);
        break;

      default:
        next(action);
        break;
    }
  }
}
