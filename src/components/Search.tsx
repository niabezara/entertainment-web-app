"use client";
import React, { useState } from "react";
import Movies from "../data/data.json";
import Movie from "../moviesInterface";

export default function Search() {
  const [activeSearch, setActiveSearch] = useState<Movie[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setActiveSearch([]);
      return;
    }
    const filteredMovies = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    ).slice(0, 8);

    setActiveSearch(filteredMovies);
  };
  return (
    <div>
      <div className="flex p-4 bg-transparent gap-4">
        <img src="/images/icon-search.svg" alt="" />
        <input
          className="bg-transparent w-full text-white"
          type="text"
          placeholder="Search for movies or TV series"
          onChange={handleSearch}
        />
      </div>
      {activeSearch.length > 0 && (
        <div>
          {" "}
          {activeSearch.map((movie) => (
            <div>{movie.title}</div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}
