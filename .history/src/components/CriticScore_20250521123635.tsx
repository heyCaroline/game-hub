import { Badge } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
const CriticScore = ({ game }: Props) => {
  return <Badge>{game.metacritic}</Badge>;
};

export default CriticScore;
