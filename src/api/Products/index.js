import apiFactory from "../../utils/apiFactory";
import {products as prod} from "../../utils/mocks/products";

export async function getProducts() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    //const products = await baseApiInstance.get('/products');
    //return products.data;
    console.log(prod)
    return prod;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
  getProducts,
}
