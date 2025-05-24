import type { GameQuery } from "../App";
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
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        sortOrder: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
export default useGames;
