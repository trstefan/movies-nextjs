import axios from "axios";
import Link from "next/link";
import React from "react";
import GenreCard from "@/components/GenreCard";
import styles from "@/styles/Layout.module.css";

const genres = ({ genresList }) => {
  const { genres } = genresList;
  console.log(genres);
  return (
    <>
      <h1 className={styles.title}>Movies</h1>
      <div className={styles.grid__genres__cards}>
        {genres.map((genre) => (
          <Link
            className={styles.link__card}
            key={genre.name}
            href={`/movies/genres/${genre.id}`}
          >
            <GenreCard genre={genre}>{genre.name}</GenreCard>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data: genresList } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=fd8d07c85ef6609efdf9fc8132e0986d&language=en-US`
  );
  return {
    props: {
      genresList,
      title: "Genres",
    },
  };
};

export default genres;
