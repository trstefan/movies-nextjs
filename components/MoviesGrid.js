import MovieCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";

const MoviesGrid = ({ movies }) => {
  return (
    <div className={styles.movies__grid}>
      {movies &&
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
    </div>
  );
};

export default MoviesGrid;
