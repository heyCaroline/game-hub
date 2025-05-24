import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { form } from "framer-motion/client";
import { useRef, type FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import type { GameQuery } from "../App";
interface Props {
  onSearch: (searchText: string) => void;
}
const handleSubmit = (event: FormEvent) => {
  const ref = useRef<HTMLInputElement>(null);
  event.preventDefault();
  if (ref.current) {
    onSearch(ref.current.value);
  }
};
const SearchInput = ({ onSearch }: Props) => {
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
