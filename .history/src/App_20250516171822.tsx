import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="yellow">
            aside
          </GridItem>{" "}
        </Show>
        <GridItem area="main" bg="red">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
