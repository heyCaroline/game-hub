import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const navBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default navBar;
