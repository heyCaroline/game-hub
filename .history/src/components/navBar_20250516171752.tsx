import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Image } from "@chakra-ui/react";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
