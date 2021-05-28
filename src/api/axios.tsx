import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const token = process.env.REACT_APP_PUBLIC_API_TOKEN;
const Axios = axios.create({
  baseURL,
});

Axios.interceptors.request.use(function (config) {
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

Axios.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
