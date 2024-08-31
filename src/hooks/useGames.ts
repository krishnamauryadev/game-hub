import useData from "./useData";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

const useGames = (selectedGenre?: String) =>
  useData<Game>(
    "/games",
    { params: selectedGenre ? { category: selectedGenre } : "" },
    [selectedGenre]
  );
export default useGames;
