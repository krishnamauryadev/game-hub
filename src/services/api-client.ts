import axios, { AxiosRequestConfig } from "axios";

export interface AxiosGameReponse<T> {
  count: number;
  results: T[];
  next: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5539b3425cb6451caff3cdbbbe0dbf19",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (params: AxiosRequestConfig) => {
    return axiosInstance
      .get<AxiosGameReponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };
}

export default APIClient;
