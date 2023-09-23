"use client";
import React, { useState } from "react";
import Movies from "../data/data.json";
import Movie from "../moviesInterface";

export default function Search({ onFilter }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onFilter(searchQuery);
  };

  return (
    <div className="xl:mx-auto xl:w-11/12">
      <div className="flex p-4 bg-transparent gap-4">
        <img src="/images/icon-search.svg" alt="" />
        <input
          className="bg-transparent w-full text-white border-none focus:outline-none"
          type="text"
          placeholder="Search for movies or TV series"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch();
          }}
        />
      </div>
    </div>
  );
}
