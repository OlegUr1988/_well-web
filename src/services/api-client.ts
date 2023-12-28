import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { VITE_REACT_APP_BASE_URL } from "../envs";

const axiosInstance = axios.create({
  baseURL: VITE_REACT_APP_BASE_URL,
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface AxiosValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export interface HttpError
  extends AxiosError<AxiosValidationError, Record<string, unknown>> {}

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  getFetchResponse = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  put = (id: string | number, entity: T) => {
    return axiosInstance
      .put<T>(this.endpoint + "/" + id, entity)
      .then((res) => res.data);
  };

  post = (entity: T) => {
    return axiosInstance.post<T>(this.endpoint, entity).then((res) => res.data);
  };

  importFromExcel = (file: FormData) => {
    return axiosInstance.post(this.endpoint, file).then((res) => res.data);
  };

  delete = (id: string | number) => {
    return axiosInstance
      .delete<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
