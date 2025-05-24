import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
