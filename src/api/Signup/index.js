import apiFactory from "../../utils/apiFactory";

export async function signup() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const users = await baseApiInstance.post('/signup');
    return users.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
    signup,
}