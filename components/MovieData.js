import { IMG_URL, NO_MOVIE_URL, NO_PERSON_URL } from "@/consts";
import styles from "../styles/MovieData.module.css";
import Link from "next/link";
import movie from "@/pages/movies/[id]";

const MovieData = ({ movieData, recommendationData, castData }) => {
  //console.log(castData);
  return (
    <div className={styles.movieData}>
      <div className={styles.main__movie}>
        <img
          src={
            movieData?.poster_path
              ? `${IMG_URL}${movieData?.poster_path}`
              : `${NO_MOVIE_URL}`
          }
          alt={movieData.original_title}
          width={300}
          height={300}
        />
        <div className={styles.main__movie__info}>
          <h1>{movieData.original_title}</h1>
          <h5>{movieData?.genres.map((genre) => genre?.name).join(", ")}</h5>
          <p>{movieData.overview}</p>
        </div>
      </div>
      <div className={styles.recommendation__grid}>
        <h1>Recommendation</h1>
        <div className={styles.recommendation__grid__movies}>
          {recommendationData &&
            recommendationData.map((recommendation) => (
              <Link
                href={`/movies/${recommendation.id}`}
                className={styles.link}
                key={recommendation.id}
              >
                <div className={styles.recommendation__item}>
                  <img
                    src={
                      recommendation?.poster_path
                        ? `${IMG_URL}${recommendation?.poster_path}`
                        : `${NO_MOVIE_URL}`
                    }
                    alt=""
                  />
                  <h4>{recommendation.title}</h4>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className={styles.cast__grid}>
        <h1>Cast</h1>
        <div className={styles.cast__grid__chars}>
          {castData &&
            castData.map((cast) => (
              <div className={styles.cast__char} key={cast.id}>
                <img
                  src={
                    cast?.profile_path
                      ? `${IMG_URL}${cast?.profile_path}`
                      : `${NO_PERSON_URL}`
                  }
                  alt=""
                  width={200}
                  height={200}
                />
                <h5>{cast.name}</h5>
                <h5>as</h5>
                <h5>{cast.character}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieData;
