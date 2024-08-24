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

  useEffect(() => {
    const constroller = new AbortController();
    apiClient
      .get<Game[]>("/games", { signal: constroller.signal })
      .then((res) => setGames(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => constroller.abort();
  }, []);

  return { games, error };
};

export default useGames;
