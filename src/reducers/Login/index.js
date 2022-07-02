import actions from '../../actions/Login';

const initialState = {
  user: {
    name: 'test',
    alias: 'test',
    password: 'test'
  },
}

function setUser(state, action) {
  const { name, alias, password } = action.payload;
  console.log("from reducer/setUser", action.payload);
  let user = {
    name: name,
    alias: alias,
    password: password
  }
  console.log("from reducer/setUser", user);
  return {
    ...state,
    user
  };
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case actions.USER().type:
      return setUser(state, action);

    default:
      return state;
  }
}