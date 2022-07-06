import apiFactory from "../../utils/apiFactory"

export async function loginCognito(payload) {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const response = await baseApiInstance.post('/dev/login', payload)
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);
    return error;
  }
}

export default {
  loginCognito,
}
