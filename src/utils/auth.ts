import { JWT } from "../services/api-client";

export const setToken = (data: JWT) => {
  const { token } = data;
  localStorage.setItem("JWT", token);
};

export const getToken = () => {
  return localStorage.getItem("JWT");
};

export const clearToken = () => {
  localStorage.removeItem("JWT");
};
