interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: string]: object } = {
    1: { scr: "", alt: "" },
    2: { scr: "", alt: "" },
    3: { scr: "", alt: "" },
    4: { scr: "", alt: "" },
  };
  return (
    <div>{rating}</div>
    // <Icon key={emojiMap.id}>

    // </Icon>
  );
};

export default Emoji;
