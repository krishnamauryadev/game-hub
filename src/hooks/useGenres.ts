import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  const apiClient = new APIClient<Genres>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });
};
export default useGenres;
