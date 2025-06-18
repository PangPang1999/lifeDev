import useGenres from "../hooks/useGenres";
import {
  Image,
  List,
  ListItem,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              onClick={() => setGenreId(genre.id)}
              variant="link"
              fontSize="lg"
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectGenreId === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
