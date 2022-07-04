import actions from '../../actions/Login';

const initialState = {
  user: {
    email: 'test',
    password: 'test'
  },
}

function authUser(state, action) {
  const { email, password } = action.payload;
  console.log("from reducer/setUser", action.payload);
  let user = {
    email: email,
    password: password
  }
  console.log("from reducer/setUser", user);
  return {
    ...state,
    user
  };
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case actions.USER().type:
      return authUser(state, action);

    default:
      return state;
  }
}