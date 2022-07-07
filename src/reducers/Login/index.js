import actions from '../../actions/Login';

const initialState = {
  user: {
    token:''
  },
  errors: {
    message: '',
    code: '',
  }
}

function authUser(state, action) {
  const  token  = action.payload;
  let user = {
    token: token, 
  }
  return {
    ...state,
    user
  };
}

function authError(state, action){
  const  {message}   = action.payload;
  const {code} = action.payload;
  let errors = {
    message: message,
    code: code 
  }
  return {
    ...state,
    errors
  };
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case actions.LOGIN().type:
      return authUser(state, action);

    case actions.ERROR().type:
      return authError(state, action);

    default:
      return state;
  }
}