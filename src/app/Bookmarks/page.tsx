"use client";
import React, { useState } from "react";
import Search from "@/components/Search";
import NavBar from "@/components/NavBar";
import Movie from "@/moviesInterface";
import AllMovies from "@/components/AllMovies";
import Booked from "@/components/Booked";

export default function BookMarks() {
  const [filteredResults, setFilteredResults] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (query: string) => {
    setSearchTerm(query.toLowerCase());
    if (query === "") {
      setFilteredResults([]);
      return;
    }
  };

  return (
    <div className="xl:flex max-w-5xl xl:m-auto xl:gap-4 xl:overflow-hidden ">
      <div className="xl:w-full xl:flex ">
        <div className="flex xl:mt-9">
          <NavBar />
        </div>
        <div className="xl:mt-9 max-w-5xl xl:w-11/12">
          <Search onFilter={handleFilter} />
          <div className="m-4">
            <h1 className="text-white font-light text-xl xl:text-2xl">
              Bookmark Movies
            </h1>
            <Booked />
          </div>
        </div>
      </div>
    </div>
  );
}
