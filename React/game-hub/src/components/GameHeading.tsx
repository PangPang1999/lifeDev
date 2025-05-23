import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return <Heading>{heading}</Heading>;
};

export default GameHeading;
