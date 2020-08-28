import React from 'react';
import axios from 'axios';
import { getToken } from '../contexts/auth';
var token = '';
export function setToken(newToken:string){
	token = newToken;
}
const api = axios.create({
    baseURL: 'http://localhost:3333',
});
api.interceptors.request.use(async config => {
	const temp = getToken();
    if (token) {
      config.headers.Authorization = `${token}`;
	}else if (temp) {
		config.headers.Authorization = `${temp}`;
	}
    return config;
  });
export default api;