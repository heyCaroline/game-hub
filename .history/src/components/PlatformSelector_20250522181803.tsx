import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";

const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Platform</MenuButton>
      <MenuList>item1</MenuList>
      <MenuList>item1</MenuList>
      <MenuList>item1</MenuList>
    </Menu>
  );
};

export default PlatformSelector;
