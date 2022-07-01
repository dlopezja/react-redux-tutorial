import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Users');

export default {
  FETCH_PRODUCTS: () => actionCraetor.create('FETCH_USERS'),

  SET_PRODUCTS: (payload) => actionCraetor.create('SET_USERS', payload),
}