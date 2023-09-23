"use client";
import Movies from "@/components/Movies";
import Search from "@/components/Search";
import React, { useState } from "react";
import Movie from "@/moviesInterface";
import AllMovies from "../../data/data.json";

export default function page() {
  const [filteredResults, setFilteredResults] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (query: string) => {
    setSearchTerm(query.toLowerCase());
    if (query === "") {
      setFilteredResults([]);
      return;
    }
    const filteredMovies = AllMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    ).slice(0, 8);

    setFilteredResults(filteredMovies);
  };
  return (
    <div className="m-4 xl:w-11/12 xl:m-9">
      <h1 className="text-white font-light text-xl">Movies</h1>
      <Search onFilter={handleFilter} />
      <Movies movies={filteredResults} searchTerm={searchTerm} />
    </div>
  );
}
