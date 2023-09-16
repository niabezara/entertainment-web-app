import React from "react";
import TrendingMovies from "./TrendingMovies";
import MovieData from "../data/data.json";
import RecomendedMovies from "./RecomendedMovies";

export default function DashBoard() {
  return (
    <div>
      <TrendingMovies />
      <RecomendedMovies />
    </div>
  );
}
