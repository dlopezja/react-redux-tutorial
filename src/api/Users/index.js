import apiFactory from "../../utils/apiFactory";

export async function getUsers() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  try {
    const users = await baseApiInstance.get('/users');
    return users.data;

  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
    getUsers,
}