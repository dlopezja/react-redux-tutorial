import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Login');

export default {
  AUTH_USER: (payload) => actionCraetor.create('AUTH_USER', payload),
  LOGIN: (payload) => actionCraetor.create('THE_USER', payload),
  ERROR: (payload) => actionCraetor.create('ERROR', payload),
}