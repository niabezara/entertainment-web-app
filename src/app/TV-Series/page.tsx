import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import TvSeries from "@/components/TvSeries";
import React from "react";

export default function page() {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <div>
      <NavBar onLogoClick={handleLogoClick} />
      <Search />
      <TvSeries />
    </div>
  );
}
