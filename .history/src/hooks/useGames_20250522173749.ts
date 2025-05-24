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
const useGames = (selectedGenres: Genres | null) =>
  useData<Game>("/games", { params: { genres: selectedGenres?.id } });
export default useGames;
