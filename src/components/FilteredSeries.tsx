import React from "react";
import MovieData from "../data/data.json";
import Movie from "@/moviesInterface";

import TvSeries from "./TvSeries";

export default function FilteredMovies({ Series, searchTerm }: any) {
  return (
    <div className=" xl:mx-auto xl:w-11/12">
      {Series && Series.length > 0 ? (
        <div className="flex flex-col gap-12 m-6  xl:w-full">
          <h1 className="text-white font-light text-xl">
            Found {Series.length} results for {searchTerm}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-8 xl:grid-cols-4">
            {Series.map((movie: Movie, index: number) => (
              <div key={index} className="flex flex-col">
                <div
                  className="rounded-lg w-full h-28 xs:h-28 p-3  relative"
                  style={{
                    backgroundImage: `url(${movie.thumbnail.regular.large})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-400 bg-opacity-50 flex items-center justify-center absolute right-1">
                    <img src="/images/icon-bookmark-empty.svg" alt="" />
                  </div>
                </div>
                <div className="flex text-gray-400 items-center space-x-1 mt-2">
                  <p className="text-sm font-light">{movie.year}</p>
                  <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                  <img
                    src="/images/icon-nav-movies.svg"
                    alt=""
                    width={12}
                    style={{ opacity: "0.75" }}
                  />
                  <p className="text-sm font-light">{movie.category}</p>
                  <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                  <p className="text-sm font-light">{movie.rating}</p>
                </div>
                <p className="trending-movie text-white ">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="m-4">
            <h1 className="text-white font-light text-xl xl:text-2xl">
              Movies
            </h1>
            <TvSeries />
          </div>
        </div>
      )}
    </div>
  );
}
