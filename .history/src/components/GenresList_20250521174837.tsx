import useGenres from "../hooks/useGenres";
import { Image, List, ListItem, Text, HStack } from "@chakra-ui/react";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id}>
          <Hstack>
            <Image src={genres.image_background} />
            <Text>{genres.name}</Text>
          </Hstack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
