import React from "react";
import TrendingMovies from "./TrendingMovies";
import MovieData from "../data/data.json";
import Movies from "./Movies";

export default function DashBoard({
  handleSearch,
  activeSearch,
  SetActiveSearch,
  searchTerm,
}: any) {
  return (
    <div>
      <div>
        {activeSearch.length > 0 ? (
          <div className="text-white font-light text-xl ">
            <h1>
              Found {activeSearch.length} results for {searchTerm}
            </h1>
            {activeSearch.map((movie: any) => (
              <div key={movie.title}>{movie.title}</div>
            ))}
          </div>
        ) : (
          <>
            <TrendingMovies />
            <div className="m-4">
              <h1 className="text-white font-light text-xl">
                Recommended for you
              </h1>
              <Movies />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
