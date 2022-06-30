import apiFactory from "../../utils/apiFactory";
// create user obj
// const user = {
//   id: long,
//   username: string,
//   email: string,
//   password: string,
// };
export async function login() {
  const baseApiInstance = apiFactory.getBaseAxiosInstance();
  
  try {
    const user = await baseApiInstance.post('/users');
    
    return user;

  } catch (error) {
    console.log('error :>> ', error);
  }
}

export default {
  login,
}
