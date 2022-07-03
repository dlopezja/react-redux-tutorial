import apiFactory from "../../utils/apiFactory";

export async function login() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const response = await baseApiInstance.post('/signin');
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
    login,
}