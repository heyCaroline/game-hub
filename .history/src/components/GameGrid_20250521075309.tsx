import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { gameList, error } = useGames();
  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>

      <div>
        {gameList.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
