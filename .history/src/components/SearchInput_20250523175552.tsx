import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { form } from "framer-motion/client";
import { useRef, type FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import type { GameQuery } from "../App";
interface Props {
  onSearch: (gameQuery: GameQuery) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius="20px"
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
