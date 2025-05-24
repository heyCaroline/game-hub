import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
