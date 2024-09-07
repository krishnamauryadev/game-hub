import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<number>();
  const [selectedPlatform, setSelectedPlatform] = useState<number>();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onPlatformSelect={setSelectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}
export default App;
