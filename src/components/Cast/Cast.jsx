import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../utils/api";
import placeholder from "./../../images/placeholder.png";

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchMovieCastById(id, setCast);
  }, [id]);

  return (
    <div>
      <ul>
        {cast.length < 1 ? (
          <p>Sorry, no cast available</p>
        ) : (
          cast.map(({ character, id, name, profile_path }) => (
            <li key={id}>
              {profile_path === null ? (
                <img
                  src={placeholder}
                  alt={`No ${name} here, just placeholder`}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
