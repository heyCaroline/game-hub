import { HStack, Switch, useColorMode } from "@chakra-ui/react";
const { colorMode, toggleColorMode } = useColorMode();

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
