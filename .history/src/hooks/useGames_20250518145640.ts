import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

interface Game {
  name: string;
  id: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGameList(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  return { gameList, error };
};
export default useGames;
