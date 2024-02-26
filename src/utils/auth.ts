import { JWT } from "../services/api-client";

const key = "JWT";

export const setToken = (data: JWT) => {
  const { token } = data;
  localStorage.setItem(key, token);
};

export const getToken = () => {
  return localStorage.getItem(key);
};

export const clearToken = () => {
  localStorage.removeItem(key);
};

export const setTokenHeader = () => {
  return { "x-auth-token": getToken()! };
};
