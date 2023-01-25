import React from "react";
import styles from "../styles/MovieCard.module.css";
import { IMG_URL, NO_MOVIE_URL } from "@/consts";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const rating = Math.round(movie?.vote_average) * 10;
  /*

 TODO Set different colours for different rating 
  const setRating = (rating) => {
    if (rating >= 80) {
      return "green";
    }
  };

  */
  return (
    <Link href={`/movies/${movie.id}`} className={styles.link}>
      <div className={styles.movie__card}>
        <img
          src={
            movie?.poster_path
              ? `${IMG_URL}${movie?.poster_path}`
              : `${NO_MOVIE_URL}`
          }
          alt={movie.original_title}
          width={300}
          height={300}
        />
        <h2>{movie.original_title}</h2>
        <tag className={styles.movie__rating}>
          {rating ? `${rating}%` : "NR"}
        </tag>
      </div>
    </Link>
  );
};

export default MovieCard;
