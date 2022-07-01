import actions from '../../actions/Users';
import api from '../../api/Products';

async function fetchUsers(dispatch) {
  try {
    const response = await api.getUsers();
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
      case actions.FETCH_USERS().type:
        await fetchUsers(dispatch);
        break;

      default:
        next(action);
        break;
    }
  }
}