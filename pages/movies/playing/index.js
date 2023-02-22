import axios from "axios";
import MoviesGrid from "@/components/MoviesGrid";
import styles from "@/styles/Layout.module.css";

const playing = ({ playingMovies }) => {
  if (!playingMovies) {
    return <h1>Loading</h1>;
  }

  const { results } = playingMovies;

  return (
    <>
      <h1 className={styles.title}>Now Playing</h1>
      <MoviesGrid movies={results}></MoviesGrid>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data: playingMovies } = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US&page=1`
  );
  return {
    props: {
      playingMovies,
      title: "Now Playing",
    },
  };
};

export default playing;
