import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import TvSeries from "@/components/TvSeries";
import React from "react";

export default function page() {
  return (
    <div className="m-4 xl:w-full xl:m-9">
      <TvSeries />
    </div>
  );
}
