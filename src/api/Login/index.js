import apiFactory from "../../utils/apiFactory";

export async function loginCognito() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const cognitoResponse = await baseApiInstance.post('');
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
