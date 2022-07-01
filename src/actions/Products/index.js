import ActionCreator from "../../utils/actionCreator"

const actionCreator = new ActionCreator('Products');

export default {
  FETCH_PRODUCTS: () => actionCreator.create('FETCH_PRODUCTS'),

  SET_PRODUCTS: (payload) => actionCreator.create('SET_PRODUCTS', payload),
}
