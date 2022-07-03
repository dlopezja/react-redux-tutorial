import apiFactory from "../../utils/apiFactory";

export async function signIn(payload) {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const response = await baseApiInstance.post('/signup',payload);
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
  signIn,
}