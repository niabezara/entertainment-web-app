"use client";
import DashBoard from "@/components/DashBoard";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import { useCallback, useEffect, useState } from "react";
import MovieData from "../data/data.json";

export default async function Home() {
  return (
    <>
      <NavBar />
      <Search />
      <DashBoard />
    </>
  );
}
