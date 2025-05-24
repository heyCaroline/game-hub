import useGenres from "../hooks/useGenres";
import { Image, List, ListItem, HStack, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import type { Genres } from "../hooks/useGenres";
interface Props {
  setSelectedGenres: (genres: Genres) => void;
}
const GenresList = ({ setSelectedGenres }: Props) => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genres.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button onClick={() => setSelectedGenres(genres)} fontSize="lg">
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
