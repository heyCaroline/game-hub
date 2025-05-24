import { Badge } from "@chakra-ui/react";
import { CriticScore } from "../hooks/useGames";
interface Props {
  criticScore: CriticScore;
}
const CriticScore = () => {
  return <Badge></Badge>;
};

export default CriticScore;
