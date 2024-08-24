import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const constroller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Game[]>("/games", { signal: constroller.signal })
      .then((res) => {
        setGames(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => constroller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
