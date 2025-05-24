import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 95 ? "green" : score > 80 ? "yellow" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
