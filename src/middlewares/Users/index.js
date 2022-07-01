import actions from '../../actions/Users';
import api from '../../api/Users';

async function fetchUsers(dispatch) {
  try {
    const response = await api.getUsers();
    dispatch(actions.SET_PRODUCTS(response));
    return response;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default function productsMiddleware(store) {
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
