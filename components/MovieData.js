import { IMG_URL, NO_MOVIE_URL, NO_PERSON_URL } from "@/consts";
import styles from "../styles/MovieData.module.css";
import Link from "next/link";
import movie from "@/pages/movies/[id]";
import { FaRegStar, FaStar, FaLink, FaImdb } from "react-icons/fa";
import Rating from "react-rating";

const MovieData = ({ movieData, recommendationData, castData }) => {
  //console.log(castData);

  const rating = Math.round(movieData.vote_average * 10) / 20;
  console.log(rating);

  return (
    <div className={styles.main__movie}>
      <img
        src={
          movieData?.poster_path
            ? `${IMG_URL}${movieData?.poster_path}`
            : `${NO_MOVIE_URL}`
        }
        alt={movieData.original_title}
        width={400}
        height={500}
      />
      <div className={styles.main__movie__info}>
        <div>
          <h1>{movieData.original_title}</h1>
          <h3>{movieData.tagline}</h3>
        </div>

        <div className={styles.rating}>
          <h2>{rating}</h2>
          <Rating
            initialRating={rating}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
            readonly
          />
        </div>
        <div className={styles.genres}>
          {movieData?.genres.map((genre) => (
            <div>
              <h5>{genre.name}</h5>
            </div>
          ))}
        </div>
        <div className={styles.info__overview}>
          <h2>Synopsis</h2>
          <p>{movieData.overview}</p>
        </div>
        <div className={styles.info__details}>
          <div>
            <h4>Length</h4>
            <p>{movieData.runtime} min.</p>
          </div>
          <div>
            <h4>Status</h4>
            <p>{movieData.status}</p>
          </div>
          <div>
            <h4>Year</h4>
            <p>{movieData.release_date.split("-")[0]}</p>
          </div>
          <div>
            <h4>Language</h4>
            <p>{movieData.spoken_languages[0].english_name}</p>
          </div>
        </div>
        <div className={styles.cast}>
          <h2>Cast</h2>
          <div className={styles.cast__grid__chars}>
            {castData &&
              castData.map((cast) => (
                <div className={styles.cast__char} key={cast.id}>
                  <h5>{cast.name}</h5>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <a
            className={styles.buttons__a}
            href={movieData.homepage}
            target="_blank"
          >
            <p>Website</p>
            <FaLink />
          </a>
          <a
            className={styles.buttons__a__imdb}
            href={`https://www.imdb.com/title/${movieData.imdb_id}`}
            target="_blank"
          >
            <p>IMDB</p>
            <FaImdb />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
