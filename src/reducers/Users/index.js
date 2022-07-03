import actions from '../../actions/Users';

const initialState = {
  users: ['asd'],
}

function setUsers(state, action) {
  const users = action.payload;
  return {
    ...state,
    users
  };
}

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case actions.SET_USERS().type:
      return setUsers(state, action);

    default:
      return state;
  }
}
