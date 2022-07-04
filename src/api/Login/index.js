import apiFactory from "../../utils/apiFactory"

export async function loginCognito(payload) {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const response = await baseApiInstance.post('https://pa5w77y609.execute-api.us-west-2.amazonaws.com/dev/login', payload)
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
  loginCognito,
}
