import React from "react";
import MovieData from "../data/data.json";

export default function RecomendedMovies() {
  return (
    <div className="m-4">
      <h1 className="text-white font-light text-xl ">Recommended for you</h1>
      <div className="flex flex-wrap w-full h-full gap-4 items-center mt-6">
        {MovieData.map((movies) =>
          movies.isTrending ? null : (
            <div>
              <div
                className="rounded-lg w-40 h-28 p-3"
                style={{
                  backgroundImage: `url(${movies.thumbnail.regular.small})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
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
