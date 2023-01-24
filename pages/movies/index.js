import axios from "axios";
import MoviesGrid from "@/components/MoviesGrid";

const movies = ({ popularMovies }) => {
  if (!popularMovies) {
    return <h1>Loading</h1>;
  }

  const { results } = popularMovies;

  return (
    <>
      <h1>Popular Movies</h1>
      <MoviesGrid movies={results}></MoviesGrid>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data: popularMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US&page=1`
  );
  return {
    props: {
      popularMovies,
    },
  };
};

export default movies;
