import useGenres from "../hooks/useGenres";
const GenresList = () => {
  const { genres } = useGenres();
  return <ul></ul>;
};

export default GenresList;
