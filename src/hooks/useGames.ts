import useData from "./useData";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

const useGames = () => useData<Game>("/games");
export default useGames;
