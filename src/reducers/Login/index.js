import actions from '../../actions/Login';

const initialState = {
  user: {
    id: '1',
    email: 'asd@',
    name: 'asd',
    password: 'reducerpassword'
  }
}

function setUser(state, action) {

  const { id, name, email, password } = action.payload;
  let user = {
    id: id,
    name: name,
    email: email,
    password: password
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
