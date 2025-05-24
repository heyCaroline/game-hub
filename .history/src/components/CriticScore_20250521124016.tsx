import { Badge } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}

const CriticScore = ({ game }: Props) => {
  const color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "";
  return <Badge>{game.metacritic}</Badge>;
};

export default CriticScore;
