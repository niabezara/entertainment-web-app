import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import TvSeries from "@/components/TvSeries";
import React from "react";

export default function page() {
  return (
    <div>
      <NavBar />
      <Search />
      <TvSeries />
    </div>
  );
}
