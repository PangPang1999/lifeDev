import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Heading fontSize="2xl" marginBottom={2}>
              Genre
            </Heading>
            <GenresList
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>{" "}
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={2} marginTop={2}>
              <PlatformSelector
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
                selectedPlatformId={gameQuery.platformId}
              />
              <Box marginLeft={2}>
                <SortSelector
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                  sortOrder={gameQuery.sortOrder}
                />
              </Box>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
