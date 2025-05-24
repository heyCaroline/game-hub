import useGenres from "../hooks/useGenres";
import { Image, List, ListItem, Text, HStack } from "@chakra-ui/react";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY={2}>
          <HStack>
            <Image
              src={genres.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genres.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
