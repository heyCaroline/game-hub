import type { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
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
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          {game.parent_platforms.map((p) => (
            <Text>{p.platform.name}</Text>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
