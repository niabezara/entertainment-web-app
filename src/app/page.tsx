"use client";
import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import { useCallback, useEffect, useState } from "react";
import Movies from "../data/data.json";
import Movie from "../moviesInterface";

export default function Home() {
  const [filteredResults, setFilteredResults] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (query: string) => {
    setSearchTerm(query.toLowerCase());
    if (query === "") {
      setFilteredResults([]);
      return;
    }
    const filteredMovies = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    ).slice(0, 8);

    setFilteredResults(filteredMovies);
  };

  return (
    <div className="xl:mt-9 max-w-5xl">
      <Search onFilter={handleFilter} />
      <DashBoard movies={filteredResults} searchTerm={searchTerm} />
    </div>
  );
}
