import actions from '../../actions/Products';

const initialState = {
  users: [],
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


// se guarda el store en el browser ?