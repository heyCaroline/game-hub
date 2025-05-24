import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectSortOrder, setSelectSortOrder] = useState<string>("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Heading fontSize="2xl" marginBottom={2}>
              Genre
            </Heading>
            <GenresList
              setSelectedGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>{" "}
        </Show>
        <GridItem area="main">
          <HStack marginBottom={2} marginLeft={2}>
            <PlatformSelector
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
              selectedPlatform={selectedPlatform}
            />
            <Box marginLeft={2}>
              <SortSelector
                onSelectSortOrder={(sortOrder) => setSelectSortOrder(sortOrder)}
                sortOrder={selectSortOrder}
              />
            </Box>
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            sortOrder={selectSortOrder}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
