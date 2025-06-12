import useGames from "../hooks/useGames";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer key={skeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          mt="4"
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
        >
          {" "}
          {isFetchingNextPage ? "加载中…" : "加载更多"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
