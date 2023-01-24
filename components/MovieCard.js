import React from "react";
import styles from "../styles/MovieCard.module.css";
const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movie__card}>
      <h2>{movie.original_title}</h2>
      <p>123</p>
      <p>34213</p>
    </div>
  );
};

export default MovieCard;
