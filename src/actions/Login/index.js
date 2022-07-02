import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Login');

export default {
  POST_USER: (payload) => actionCraetor.create('USER', payload),
  USER: (payload) => actionCraetor.create('THE_USER', payload),
}