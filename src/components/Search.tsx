"use client";
import React, { useState } from "react";

export default function Search({ onFilter }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onFilter(searchQuery);
  };

  return (
    <div className="xl:mx-auto ">
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
