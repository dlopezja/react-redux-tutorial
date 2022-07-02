import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('SignUp');

export default {
  AUTH_USER: (payload) => actionCraetor.create('AUTH_USER', payload),
  USER: (payload) => actionCraetor.create('THE_USER', payload),
}