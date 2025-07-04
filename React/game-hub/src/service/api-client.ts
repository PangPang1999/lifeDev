import axios, { type AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a841d5a4ef7b426f9432d3ffd1989b69",
  },
});
export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  previous?: string | null;
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
  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
