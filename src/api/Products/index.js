import apiFactory from "../../utils/apiFactory";

export async function getProducts() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const products = await baseApiInstance.get('/products');
    
    return products.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
  getProducts,
}
