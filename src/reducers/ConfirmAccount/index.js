import actions from '../../actions/ConfirmAccount';

const initialState = {
  user: {
    email: 'test',
    code: 'test'
  },
}

function confirmUser(state, action) {
  const { name, code } = action.payload;
  console.log("from reducer/setUser", action.payload);
  let confirmation = {
    name: name,
    code: code
  }
  console.log("from reducer/setUser", confirmation);
  return {
    ...state,
    confirmation
  };
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case actions.CONFIRM().type:
      return confirmUser(state, action);

    default:
      return state;
  }
}