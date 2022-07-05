import actions from '../../actions/Login';

const initialState = {
  user: {
    token:''
  },
}

function authUser(state, action) {
  const  token  = action.payload;
  console.log("from reducer/setUser", action.payload);
  let user = {
    token: token, 
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