import React from "react";
import Series from "../data/data.json";

export default function TvSeries() {
  return (
    <div className="m-4">
      <h1 className="text-white font-light text-xl">TV Series</h1>
      <div className="flex flex-wrap w-full h-full gap-4 items-center mt-6">
        {Series.map((serie) =>
          serie.category == "TV Series" ? (
            <div className="w-full xs:w-auto">
              <div
                className="rounded-lg w-full xs:w-40 h-48 xs:h-28 p-3  relative "
                style={{
                  backgroundImage: `url(${serie.thumbnail.regular.small})`,
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
  );
}
