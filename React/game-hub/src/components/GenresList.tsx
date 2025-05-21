import useGenres from "../hooks/useGenres";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
