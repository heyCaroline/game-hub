import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// const useGenres = () => useData<Genres>("/genres");
const useGenres = () => {
  return {
    data: useData,
    isLoading: false,
    error: null,
  };
};
export default useGenres;
