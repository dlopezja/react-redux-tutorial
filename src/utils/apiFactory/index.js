import axios from "axios";

export function getBaseAxiosInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {},
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
