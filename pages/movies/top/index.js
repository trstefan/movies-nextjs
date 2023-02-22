import axios from "axios";
import MoviesGrid from "@/components/MoviesGrid";
import styles from "@/styles/Layout.module.css";

const top = ({ topMovies }) => {
  if (!topMovies) {
    return <h1>Loading</h1>;
  }

  const { results } = topMovies;

  return (
    <>
      <h1 className={styles.title}>Top Movies</h1>
      <MoviesGrid movies={results}></MoviesGrid>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data: topMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US&page=1`
  );
  return {
    props: {
      topMovies,
      title: "Top Movies",
    },
  };
};

export default top;
