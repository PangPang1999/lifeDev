import { Heading } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";
const GameHeading = () => {
  const selectGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectGenreId);

  const selectPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(selectPlatformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading>{heading}</Heading>;
};

export default GameHeading;
