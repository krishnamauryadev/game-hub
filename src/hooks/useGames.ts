import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlateforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games", { params: gameQuery }, [gameQuery]);
};

export default useGames;
