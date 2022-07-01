import actions from '../../actions/Login';
import api from '../../api/Login';

async function signIn(dispatch, action) {
  try {
    const response = await api.signIn(action.payload);
    dispatch(actions.SET_USER(response));
  } catch (error) {
    // dispatch the Error and save it the store??
  }
}

export default function loginMiddleware(store) {
  const { dispatch } = store;

  return (next) => async (action) => {
    switch (action.type) {
      case actions.SIGN_IN().type:
        await signIn(dispatch, action);
        break;

      default:
        next(action);
        break;
    }
  }
}
