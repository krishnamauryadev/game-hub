import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  interface AxiosGameReponse {
    count: number;
    results: T[];
  }
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const constroller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<AxiosGameReponse>(endPoint, {
          signal: constroller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setIsLoading(false);
          setError(err.message);
        });

      return () => constroller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
