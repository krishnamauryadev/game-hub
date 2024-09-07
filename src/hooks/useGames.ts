import useData from "./useData";
import { Platform } from "./usePlateforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (selectedGenre?: number, selectedPlatform?: number) => {
  const categoryParam = selectedGenre ? { genres: selectedGenre } : "";
  const platformParam = selectedPlatform
    ? { parent_platforms: selectedPlatform }
    : "";
  const params = { ...categoryParam, ...platformParam };

  return useData<Game>("/games", { params: params }, [
    selectedGenre,
    selectedPlatform,
  ]);
};

export default useGames;
