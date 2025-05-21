import useGenres from "../hooks/useGenres";
const GenresList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
