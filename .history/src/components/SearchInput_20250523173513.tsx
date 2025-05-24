import { Input, InputGroup } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        borderRadius="20px"
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
