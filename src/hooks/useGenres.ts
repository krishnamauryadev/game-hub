import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { AxiosGameReponse } from "../services/api-client";
import genres from "../data/genres";
interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<AxiosGameReponse<Genres>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });
};
export default useGenres;
