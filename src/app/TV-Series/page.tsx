"use client";

import Search from "@/components/Search";
import React, { useState } from "react";
import Movie from "@/moviesInterface";
import AllMovies from "../../data/data.json";
import FilteredSeries from "@/components/FilteredSeries";
import NavBar from "@/components/NavBar";

export default function TvSeries() {
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
    <div className="xl:flex max-w-5xl xl:m-auto xl:gap-4 xl:overflow-hidden ">
      <div className="xl:w-full xl:flex ">
        <div className="flex xl:mt-9">
          <NavBar />
        </div>
        <div className="xl:mt-9 max-w-5xl xl:w-11/12">
          <Search onFilter={handleFilter} />
          <FilteredSeries Series={filteredResults} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}
