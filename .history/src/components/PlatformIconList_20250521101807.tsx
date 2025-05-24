import { HStack, Icon, Text } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <div>
      <HStack>
        {game.parent_platforms.map((p) => (
          <Text>{p.platform.name}</Text>
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
