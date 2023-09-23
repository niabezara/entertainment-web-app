"use client";
import React, { createContext, useState, useEffect } from "react";
import Movies from "../src/data/data.json"; // Adjust the path to your data
import Movie from "@/moviesInterface";

interface MovieContextProps {
  movies: Movie[];
  searchQuery: string;
  handleSearchChange: (query: string) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

const MovieProvider = ({ children }: any) => {
  const [movies, setMovies] = useState(Movies);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const filteredMovies = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8);
    setMovies(filteredMovies);
  }, [searchQuery]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        searchQuery,
        handleSearchChange,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
