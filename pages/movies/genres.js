import axios from "axios";
import React from "react";

const genres = ({ genresList }) => {
  console.log(genresList);
  return (
    <>
      <h2>Hello from Genres</h2>
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
