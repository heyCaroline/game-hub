import SortSelector from "../components/SortSelector";
import useData from "./useData";
import type { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null,
  selectSortOrder: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        SortSelector,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectSortOrder]
  );
export default useGames;
