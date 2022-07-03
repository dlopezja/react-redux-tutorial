import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Confirm');

export default {
  CONFIRM_USER: (payload) => actionCraetor.create('CONFIRM_USER', payload),
  CONFIRM: (payload) => actionCraetor.create('CONFIRM', payload),
}