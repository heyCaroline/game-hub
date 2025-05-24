import type { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        borderRadius="10px"
        overflow="hidden"
      />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
