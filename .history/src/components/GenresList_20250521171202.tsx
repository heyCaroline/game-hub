import useData from "../hooks/useData";
import { type Genres } from "../hooks/useGenres";
const GenresList = () => {
  const { data: genres } = useData<Genres>("/genres");
  return (
    <ul>
      {genres.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
