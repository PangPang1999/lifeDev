import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genreId?.name || ""} ${
    gameQuery.platformId?.name || ""
  } Games`;
  return <Heading>{heading}</Heading>;
};

export default GameHeading;
