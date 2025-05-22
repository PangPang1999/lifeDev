import useGenres from "../hooks/useGenres";
import { Image, List, ListItem, HStack, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import type { Genres } from "../hooks/useGenres";
interface Props {
  setSelectedGenre: (genre: Genres) => void;
}
const GenresList = ({ setSelectedGenre }: Props) => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => setSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
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
