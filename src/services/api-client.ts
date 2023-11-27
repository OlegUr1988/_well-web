import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  createAsset = (asset: T) => {
    return axiosInstance.post<T>(this.endpoint, asset).then((res) => res.data);
  };
}

export default APIClient;
