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
import type { Genres } from "../hooks/useGenres";
interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenreId?: number;
}
const GenresList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
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
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
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
