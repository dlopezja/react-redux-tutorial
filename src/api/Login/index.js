import apiFactory from "../../utils/apiFactory";

export async function login() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const users = await baseApiInstance.get('/login');
    return users.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
    login,
}