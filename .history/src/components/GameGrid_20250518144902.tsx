import { useState } from "react";
import apiClient from "../service/api-client";
import { div } from "framer-motion/client";
const GameGrid = () => {
  interface Game {
    name: string;
    id: number;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");

  apiClient
    .get<FetchGamesResponse>("/games")
    .then((res) => {
      setGameList(res.data.results);
    })
    .catch((err) => setError(err.message));
  return (
    <>
      <div></div>

      <div>
        {gameList.map((g) => (
          <p key={g.id}>{g.name}</p>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
