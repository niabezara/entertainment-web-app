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
      <h1 className="text-white font-light text-xl xl:text-2xl ">Trending</h1>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-4">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="caruselinner flex gap-4 "
        >
          {MovieData.map((movie, index) => (
            <motion.div key={index}>
              {movie.isTrending ? (
                <div className="group relative cursor-pointer items-center justify-center">
                  <div className="rounded-lg   w-60 h-30   sm:w-96 relative">
                    <img
                      className="rounded-md "
                      src={movie.thumbnail.trending?.large}
                      alt=""
                    />
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                      <button className="rounded-full flex items-center p-1 gap-1 bg-gray-300 opacity-90 py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                        <img src="/assets/icon-play.svg" alt="" />
                        Play
                      </button>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 bg-opacity-50 flex items-center justify-center absolute top-4 right-3">
                      <img src="/images/icon-bookmark-empty.svg" alt="" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 flex text-white items-center space-x-1 ">
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
