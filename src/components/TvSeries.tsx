import React from "react";
import Series from "../data/data.json";

export default function TvSeries() {
  return (
    <div className="m-4 hover:cursor-pointer">
      <h1 className="text-white font-light text-xl">TV Series</h1>
      <div className="flex flex-col gap-12 w-full max-w-7xl mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-8 xl:grid-cols-4 ">
          {Series.map((serie, index) =>
            serie.category == "TV Series" ? (
              <div key={index} className="flex flex-col">
                <div className="group relative cursor-pointer items-center justify-center">
                  <div className="rounded-lg w-full h-full relative">
                    <img
                      className="rounded-md"
                      src={serie.thumbnail.regular.large}
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
