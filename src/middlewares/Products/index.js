import actions from '../../actions/Products';
import api from '../../api/Products';

async function fetchProducts(dispatch) {
  try {
    const response = await api.getProducts();
    dispatch(actions.SET_PRODUCTS(response));
    console.log("products from middleware", response);
    return response;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default function productsMiddleware(store) {
  const { dispatch } = store;
  return (next) => async (action) => {
    switch(action.type) {
      case actions.FETCH_PRODUCTS().type:
        await fetchProducts(dispatch);
        break;

      default:
        next(action);
        break;
    }
  }
}
