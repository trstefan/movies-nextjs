import axios from "axios";
import MovieData from "@/components/MovieData";

const movie = ({ movieData, recommendationData, castData }) => {
  return (
    <div>
      <MovieData
        movieData={movieData}
        recommendationData={recommendationData}
        castData={castData}
      ></MovieData>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { data: movieData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US`
  );

  const {
    data: { results: recommendationData },
  } = await axios.get(`
  https://api.themoviedb.org/3/movie/${context.params.id}/recommendations?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US&page=1`);

  const {
    data: { cast: castData },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}/credits?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US`
  );

  return {
    props: {
      movieData,
      recommendationData,
      castData,
    },
  };
};

export default movie;
