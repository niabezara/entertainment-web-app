"use client";
import React from "react";
import MovieData from "../data/data.json";
import { motion } from "framer-motion";

export default function TrendingMovies() {
  return (
    <div>
      <motion.div className="cursor-grab overflow-hidden m-0 ml-4">
        <motion.div className="caruselinner flex">
          {MovieData.map((movie, index) => (
            <motion.div key={index} className="">
              {movie.isTrending ? (
                <div
                  style={{
                    backgroundImage: `url(${movie.thumbnail.trending?.small})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <h1 className="text-white font-light text-xl">Trending</h1>
                  <div className="">
                    <p className="trending-movie text-white">{movie.title}</p>
                    <p>{movie.year}</p>
                    <p>{movie.rating}</p>
                  </div>
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
