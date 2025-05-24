import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genres } from "../hooks/useGenres";
interface Props {
  selectedGenres: Genres | null;
}
const GameGrid = ({ selectedGenres }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenres);
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(selectedGenres);
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
            <GameCardContainer key={skeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
