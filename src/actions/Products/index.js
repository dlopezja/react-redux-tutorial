import ActionCreator from "../../utils/actionCreator"

const actionCraetor = new ActionCreator('Products');

export default {
  FETCH_PRODUCTS: () => actionCraetor.create('FETCH_PRODUCTS'),

  SET_PRODUCTS: (payload) => actionCraetor.create('SET_PRODUCTS', payload),
}
