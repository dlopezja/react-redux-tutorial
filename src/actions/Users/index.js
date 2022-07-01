import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Users');

export default {
  FETCH_USERS: () => actionCraetor.create('FETCH_USERS'),

  SET_USERS: (payload) => actionCraetor.create('SET_USERS', payload),
}
