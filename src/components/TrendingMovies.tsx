"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import MovieData from "../data/data.json";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { BookContext } from "@/app/context/BookContext";
import { useRouter } from "next/router";

export default function TrendingMovies() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  const { items, addToBook, removeFromBook } = useContext(BookContext);
  const { data: session } = useSession();

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
                    <div
                      onClick={() => {
                        try {
                          if (session) {
                            const movieToAdd = {
                              title: movie.title,
                              thumbnail: movie.thumbnail.regular.large,
                              year: movie.year,
                              category: movie.category,
                              rating: movie.rating,
                            };

                            const isInBook = items.some(
                              (bookedMovie) => bookedMovie.title === movie.title
                            );

                            if (isInBook) {
                              // Remove the movie from the book
                              removeFromBook(movie.title);
                            } else {
                              // Add the movie to the book
                              addToBook(movieToAdd);
                            }
                          }
                        } catch (error) {
                          console.error(
                            "Error handling movie bookmark:",
                            error
                          );
                        }
                      }}
                      className="w-8 h-8 z-50 rounded-full bg-gray-400 bg-opacity-50 flex items-center justify-center absolute top-4 right-3"
                    >
                      <img
                        src={
                          items.some(
                            (bookedMovie) => bookedMovie.title === movie.title
                          )
                            ? "/images/Path.png"
                            : "/images/icon-bookmark-empty.svg"
                        }
                        alt=""
                      />
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
