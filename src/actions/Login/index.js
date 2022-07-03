import ActionCreator from "../../utils/actionCreator"

const actionCreator = new ActionCreator('auth');

export default {
  SIGN_IN: (payload) => actionCreator.create('SIGN_IN', payload),

  SET_USER: (payload) => actionCreator.create('SET_USER', payload),
}
