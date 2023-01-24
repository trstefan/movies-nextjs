import axios from "axios";
import MoviesGrid from "@/components/MoviesGrid";

const upcoming = ({ upcomingMovies }) => {
  if (!upcomingMovies) {
    return <h1>Loading</h1>;
  }

  const { results } = upcomingMovies;

  return (
    <>
      <h1>Upcoming Movies</h1>
      <MoviesGrid movies={results}></MoviesGrid>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data: upcomingMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US&page=1`
  );
  return {
    props: {
      upcomingMovies,
    },
  };
};
export default upcoming;
