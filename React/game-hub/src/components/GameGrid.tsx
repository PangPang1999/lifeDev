import useGames from "../hooks/useGames";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  if (error) return null;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
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
      {/* {hasNextPage && (
        <Button
          mt="4"
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
        >
          {" "}
          {isFetchingNextPage ? "加载中…" : "加载更多"}
        </Button>
      )} */}
    </InfiniteScroll>
  );
};

export default GameGrid;
