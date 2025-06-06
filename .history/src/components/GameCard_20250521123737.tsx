import type { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
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
        <HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore game={game}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
