import { Icon, type ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: string]: ImageProps } = {
    // key 是数字
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" }, // bullseye 可能需要更大尺寸
  };
  return (
    // <div>{rating}</div>
    <Icon key={emojiMap.id} as={emojiMap[rating]}></Icon>
  );
};

export default Emoji;
