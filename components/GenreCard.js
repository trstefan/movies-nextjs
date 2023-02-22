import React from "react";
import styles from "@/styles/GenreCard.module.css";
const GenreCard = ({ genre }) => {
  return <div className={styles.genrecard}>{genre.name}</div>;
};
export default GenreCard;
