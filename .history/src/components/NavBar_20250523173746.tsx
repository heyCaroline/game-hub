import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {}
const NavBar = () => {
  return (
    <form>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </form>
  );
};

export default NavBar;
