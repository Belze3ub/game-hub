import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '05b98e5ec10e4dbb98cd0ea14c408272',
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
