import React from "react";
import MovieData from "../data/data.json";

export default function Movies() {
  return (
    <div className="flex flex-col gap-12 w-full max-w-screen-lg mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-8 ">
        {MovieData.map((movies, index) =>
          movies.isTrending ? null : (
            <div key={index} className="flex flex-col ">
              <div
                className="rounded-lg w-full h-28 xs:h-28 p-3  relative "
                style={{
                  backgroundImage: `url(${movies.thumbnail.regular.small})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-400 bg-opacity-50 flex items-center justify-center absolute right-1">
                  <img src="/images/icon-bookmark-empty.svg" alt="" />
                </div>
              </div>
              <div className=" flex text-gray-400 items-center space-x-1 mt-2">
                <p className="text-sm font-light">{movies.year}</p>
                <div className="bg-white rounded-full w-0.5 h-0.5 "></div>
                <img
                  src="/images/icon-nav-movies.svg"
                  alt=""
                  width={12}
                  style={{ opacity: "0.75" }}
                />
                <p className="text-sm font-light">{movies.category}</p>
                <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                <p className="text-sm font-light">{movies.rating}</p>
              </div>
              <p className="trending-movie text-white ">{movies.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
