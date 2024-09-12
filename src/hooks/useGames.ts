import useData from "./useData";
import { Platform } from "./usePlateforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (
  selectedGenre?: number,
  selectedPlatform?: number,
  searchInput?: String
) => {
  const categoryParam = selectedGenre ? { genres: selectedGenre } : "";
  const platformParam = selectedPlatform
    ? { parent_platforms: selectedPlatform }
    : "";
  const search = searchInput ? searchInput : "";
  const params = { ...categoryParam, ...platformParam, search };

  return useData<Game>("/games", { params: params }, [
    selectedGenre,
    selectedPlatform,
    searchInput,
  ]);
};

export default useGames;
