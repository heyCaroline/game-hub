import useGenres from "../hooks/useGenres";
import { Image, List, ListItem, Text } from "@chakra-ui/react";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id}>
          <Image src={genres.image_background} />
          <Text>{genres.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
