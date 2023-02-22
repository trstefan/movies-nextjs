import React from "react";
import styles from "../styles/MovieCard.module.css";
import { IMG_URL, NO_MOVIE_URL } from "@/consts";
import Link from "next/link";

const MovieCard = ({ movie }) => {
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
          height={250}
        />
        <div className={styles.card__details}>
          <h2>{movie.original_title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
