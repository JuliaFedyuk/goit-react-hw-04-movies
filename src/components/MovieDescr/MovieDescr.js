const MovieDescr = ({
  title,
  date,
  poster_path,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <>
      <h1>
        {title} ({date})
      </h1>
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
        alt=""
      />
      <p>
        <b>Rank:</b> {vote_average}
      </p>
      <p>
        <b>Overview:</b> {overview}
      </p>
      <p>
        <b>Genres:</b> {genres.join(' ')}
      </p>
    </>
  );
};

export default MovieDescr;
