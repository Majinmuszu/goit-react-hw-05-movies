import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../utils/api";

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");
  const searchMovies = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === "") {
      return;
    }
    setSearchQuery({ query: formQuery });
    fetchMovieByQuery(query, setSearchedMovies);
    form.reset();
  };

  useEffect(() => {
    if (query === null) {
      setSearchedMovies([]);
      return;
    }
    fetchMovieByQuery(query, setSearchedMovies);
  }, [query]);

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" name="query"></input>
        <button type="submit">Search Movies</button>
      </form>
      <ul>
        {searchedMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
