import axios from "axios";

export function getBaseAxiosInstance() {
  return axios.create({
    baseURL: 'https://pa5w77y609.execute-api.us-west-2.amazonaws.com',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
  });
}

export default {
  getBaseAxiosInstance,
}


// 1. CORS (frontend) : we don't do in the frontend, do in the backend
// 2. react dev tools : can not install in this computer
// 3. vulnerabilities for npm install: there are pages to check this vulnerabilities

// 3. TEAM: index.js
// 4. TEAM: React-Redux
