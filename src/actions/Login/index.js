import ActionCreator from "../../utils/actionCreator"

const actionCreator = new ActionCreator('Login');

export default {
  FETCH_USER: () => actionCreator.create('FETCH_USER'),
  
  SET_USERS: (payload) => actionCreator.create('SET_USER',payload)
}
