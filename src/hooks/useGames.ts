import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { AxiosGameReponse } from "../services/api-client";
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
  const apiClient = new APIClient<Game>("/games");
  return useQuery<AxiosGameReponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient.getAll({ params: gameQuery });
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
