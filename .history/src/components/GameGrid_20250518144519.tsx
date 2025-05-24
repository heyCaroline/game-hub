import { useState } from "react";
import apiClient from "../service/api-client";
const GameGrid = () => {
  interface Game {
    name: string;
    id: number;
  }
  const [gameList, setGameList] = useState<Game[]>([]);
  apiClient.get("/games").then((res) => {
    setGameList(res.data.results);
  });
  return (
    <div>
      {gameList.map((g) => (
        <p key={g.id}>{g.name}</p>
      ))}
    </div>
  );
};

export default GameGrid;
