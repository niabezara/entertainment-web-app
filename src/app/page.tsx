"use client";
import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import { useCallback, useEffect, useState } from "react";

import Movies from "../data/data.json";
import Movie from "../moviesInterface";

export default function Home() {
  const [activeSearch, setActiveSearch] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
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
    <div className="xl:mt-9 max-w-5xl">
      <Search
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        handleSearch={handleSearch}
      />
      <DashBoard
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
