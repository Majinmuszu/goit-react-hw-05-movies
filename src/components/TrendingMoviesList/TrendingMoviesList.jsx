import React from "react";
import { Link } from "react-router-dom";
import s from "./TrendingMovies.module.css"

const TrendingMoviesList = ({ trending }) => {
  return (
    <ul className={s.list}>
      {trending.map((movie) => (
        <li className={s.listItem} key={movie.id}>
          <Link className={s.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingMoviesList;
