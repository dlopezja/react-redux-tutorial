import actions from '../../actions/Login';

const initialState = {
  user: [],
}

function postUser(state, action) {
  const user = action.payload;
  return {
    ...state,
    user
  };
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case actions.POST_USER().type:
      console.log("from reducer",actions.POST_USER().type)
      return postUser(state, action);

    default:
      return state;
  }
}