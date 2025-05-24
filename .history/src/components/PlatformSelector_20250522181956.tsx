import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>item1</MenuList>
      <MenuList>item1</MenuList>
      <MenuList>item1</MenuList>
    </Menu>
  );
};

export default PlatformSelector;
