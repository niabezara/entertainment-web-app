"use client";

import Search from "@/components/Search";
import React, { useState } from "react";
import Movie from "@/moviesInterface";
import AllMovies from "../../data/data.json";
import FilteredSeries from "@/components/FilteredSeries";

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
    <div className="xl:mt-9 max-w-5xl ">
      <Search onFilter={handleFilter} />
      <FilteredSeries Series={filteredResults} searchTerm={searchTerm} />
    </div>
  );
}
