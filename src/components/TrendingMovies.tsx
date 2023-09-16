"use client";
import React, { useEffect, useRef, useState } from "react";
import MovieData from "../data/data.json";
import { motion } from "framer-motion";

export default function TrendingMovies() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="m-0 ml-4">
      <h1 className="text-white font-light text-xl ">Trending</h1>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden ">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="caruselinner flex gap-4"
        >
          {MovieData.map((movie, index) => (
            <motion.div key={index}>
              {movie.isTrending ? (
                <div
                  className="w-60 h-40 px-4"
                  style={{
                    backgroundImage: `url(${movie.thumbnail.trending?.small})`,
                    backgroundRepeat: "no-repeat",
                    pointerEvents: "none",
                    backgroundSize: "100% 100%",
                    borderRadius: "8px",
                  }}
                >
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
