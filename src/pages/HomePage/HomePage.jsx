import React, { useState, useEffect } from "react";
import TrendingMoviesList from "../../components/TrendingMoviesList/TrendingMoviesList";
import { fetchTrending } from "../../utils/api";
import s from "./HomePage.module.css"
const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending(setTrending);
  },[]);
  
  return (
    <div className={s.container}>
      <h1 className={s.header}>Trending Today</h1>
      <TrendingMoviesList trending={trending} />
    </div>
  );
};

export default HomePage;
