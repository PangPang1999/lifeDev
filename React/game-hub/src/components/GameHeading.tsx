import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatforms(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading>{heading}</Heading>;
};

export default GameHeading;
