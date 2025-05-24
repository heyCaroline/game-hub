import { HStack } from "@chakra-ui/react";
import logo from "..src/assets/logo.png";
import { Image } from "@chakra-ui/react";
const navBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default navBar;
