import NavBar from "@/components/NavBar";
import Movies from "@/components/Movies";
import Search from "@/components/Search";
import React from "react";

export default function page() {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <div>
      <NavBar onLogoClick={handleLogoClick} />
      <Search />
      <div className="m-4">
        <h1 className="text-white font-light text-xl">Movies</h1>
        <Movies />
      </div>
    </div>
  );
}
