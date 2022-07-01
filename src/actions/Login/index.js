import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Login');

export default {
  GET_USER: () => actionCraetor.create('AUTH_USER'),

  SET_USER: (payload) => actionCraetor.create('SET_USER', payload),
}