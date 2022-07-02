import actions from '../../actions/Login';

const initialState = {
  user: {
    name:'',
    alias:'',
    password:'',
  },
}

function postUser(state, action) {
  const user = action.payload;
  console.log("from reducer II", user)
  return {
    ...state,
    name: user.name,
    alias: user.alias,
    password: user.password,
  };
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case actions.USER().type:
      console.log("from reducer",actions.USER().type)
      return postUser(state, action);

    default:
      return state;
  }
}