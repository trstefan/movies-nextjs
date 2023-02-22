import React from "react";
import axios from "axios";
import MoviesGrid from "@/components/MoviesGrid";

const genre = ({ moviesPerGenre }) => {
  console.log(moviesPerGenre);

  return (
    <div>
      <MoviesGrid movies={moviesPerGenre}></MoviesGrid>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const {
    data: { results: moviesPerGenre },
  } = await axios.get(`
  https://api.themoviedb.org/3/discover/movie?api_key=fd8d07c85ef6609efdf9fc8132e0986d&with_genres=${context.params.id}
  `);

  return {
    props: {
      moviesPerGenre,
    },
  };
};

export default genre;
