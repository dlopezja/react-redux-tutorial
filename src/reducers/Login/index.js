import actions from '../../actions/Login';

const initialState = {
  user: {
    id: '',
    email: '',
    name: '',
  }
}

function setUser(state, action) {
  // destructuring in this way cause the payload has the { id, name, email } props
  // can we enhance this? you can try
  const { id, name, email } = action.payload;
  let user = {
    id: id,
    name: name,
    email: email
  }
  return {
    ...state,
    user
  }
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER().type:
      return setUser(state, action);

    default:
      return state;
  }
}
