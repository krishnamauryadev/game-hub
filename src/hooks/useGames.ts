import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { AxiosGameReponse } from "../services/api-client";
import { Platform } from "./usePlateforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<AxiosGameReponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<AxiosGameReponse<Game>>("/games", { params: gameQuery })
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
