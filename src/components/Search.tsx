import React, { useState } from "react";
import Movie from "../moviesInterface";

export default function Search({
  handleSearch,
  activeSearch,
  SetActiveSearch,
}: any) {
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
    </div>
  );
}
