import actions from '../../actions/Products';

const initialState = {
  products: [],
}

function setProducts(state, action) {
  const products = action.payload;
  return {
    ...state,
    products
  };
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PRODUCTS().type:
      return setProducts(state, action);

    default:
      return state;
  }
}