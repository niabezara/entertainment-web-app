import React from "react";
import Series from "../data/data.json";

export default function TvSeries() {
  return (
    <div className="m-4 hover:cursor-pointer">
      <h1 className="text-white font-light text-xl">TV Series</h1>
      <div className="flex flex-col gap-12 w-full max-w-7xl mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-8 xl:grid-cols-4 ">
          {Series.map((serie) =>
            serie.category == "TV Series" ? (
              <div className="flex flex-col">
                <div
                  className="rounded-lg w-full h-28 xs:h-28 p-3  relative "
                  style={{
                    backgroundImage: `url(${serie.thumbnail.regular.large})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-400 bg-opacity-50 flex items-center justify-center absolute right-1">
                    <img src="/images/icon-bookmark-empty.svg" alt="" />
                  </div>
                </div>
                <div className=" flex text-gray-400 items-center space-x-1 mt-2">
                  <p className="text-sm font-light">{serie.year}</p>
                  <div className="bg-white rounded-full w-0.5 h-0.5 "></div>
                  <img
                    src="/images/icon-nav-movies.svg"
                    alt=""
                    width={12}
                    style={{ opacity: "0.75" }}
                  />
                  <p className="text-sm font-light">{serie.category}</p>
                  <div className="bg-white rounded-full w-0.5 h-0.5"></div>
                  <p className="text-sm font-light">{serie.rating}</p>
                </div>
                <p className="trending-movie text-white ">{serie.title}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
