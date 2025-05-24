import useData from "../hooks/useData";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { data, error, isLoading } = useData()();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeletons} />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
