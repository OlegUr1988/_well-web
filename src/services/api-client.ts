import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  put = (id: string | number, asset: T) => {
    return axiosInstance
      .put<T>(this.endpoint + "/" + id, asset)
      .then((res) => res.data);
  };

  post = (asset: T) => {
    return axiosInstance.post<T>(this.endpoint, asset).then((res) => res.data);
  };

  delete = (id: string | number) => {
    return axiosInstance
      .delete<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
