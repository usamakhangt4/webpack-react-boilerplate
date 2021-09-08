interface componentProps {
  movies?: any[];
}

export default function MoviesList(props: componentProps) {
  const { movies } = props;
  return (
    <div>
      {movies ? (
        movies.map(movie => <li key={movie.id}>{movie.title}</li>)
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
