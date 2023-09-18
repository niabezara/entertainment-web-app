import React from "react";
import TrendingMovies from "./TrendingMovies";
import MovieData from "../data/data.json";
import Movies from "./Movies";

export default function DashBoard() {
  return (
    <div>
      <TrendingMovies />
      <div className="m-4">
        <h1 className="text-white font-light text-xl ">Recommended for you</h1>
        <Movies />
      </div>
    </div>
  );
}
