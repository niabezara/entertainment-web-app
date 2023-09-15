"use client";
import React, { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <div className="flex p-4 bg-transparent gap-4">
      <img src="/images/icon-search.svg" alt="" />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for movies or TV series"
        className="bg-transparent w-full"
      />
    </div>
  );
}
