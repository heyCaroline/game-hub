import { Grid, GridItem, Show } from "@chakra-ui/react";
import navBar from "./component/navBar";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          <navBar />
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
