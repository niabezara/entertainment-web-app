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
      <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-4">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="caruselinner flex gap-4"
        >
          {MovieData.map((movie, index) => (
            <motion.div key={index}>
              {movie.isTrending ? (
                <div
                  className="w-60 h-40 p-4 relative"
                  style={{
                    backgroundImage: `url(${movie.thumbnail.trending?.small})`,
                    backgroundRepeat: "no-repeat",
                    pointerEvents: "none",
                    backgroundSize: "100% 100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="absolute bottom-7 flex text-white items-center space-x-1 ">
                    <p className="text-sm font-light">{movie.year}</p>
                    <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                    <img
                      src="/images/icon-nav-movies.svg"
                      alt=""
                      width={12}
                      style={{ opacity: "0.75" }}
                    />
                    <p className="text-sm font-light">{movie.category}</p>
                    <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                    <p className="text-sm font-light">{movie.rating}</p>
                  </div>
                  <div>
                    <p className="trending-movie text-white absolute bottom-2">
                      {movie.title}
                    </p>
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
