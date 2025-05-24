import type { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
    </Card>
  );
};

export default GameCard;
