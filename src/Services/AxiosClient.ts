import axios from "axios";

export const axiosClient = axios.create({
    baseURL : "http://localhost:5000/api/v1/",
    withCredentials : true
})


axiosClient.interceptors.request.use(function (config) {
    // Do something before the request is sent
    return config;
  }, function (error) {
    // Do something with the request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });