import useData from "./useData";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

const useGames = (selectedGenre?: String, selectedPlatform?: String) => {
  const categoryParam = selectedGenre ? { category: selectedGenre } : "";
  const platformParam = selectedPlatform ? { platform: selectedPlatform } : "";
  const params = { ...categoryParam, ...platformParam };

  return useData<Game>("/games", { params: params }, [
    selectedGenre,
    selectedPlatform,
  ]);
};

export default useGames;
