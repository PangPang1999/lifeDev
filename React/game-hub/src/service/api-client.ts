import axios, { type AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a841d5a4ef7b426f9432d3ffd1989b69",
  },
});
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
  };
}

export default ApiClient;
