import React from "react";
import MovieData from "../data/data.json";

export default function RecomendedMovies() {
  return (
    <div className="m-4">
      <h1>Recommended for you</h1>
      <div className="flex flex-wrap w-full h-full gap-4 items-center">
        {MovieData.map((movies) =>
          movies.isTrending ? null : (
            <div
              className="rounded-lg w-40 h-28 p-3"
              style={{
                backgroundImage: `url(${movies.thumbnail.regular.small})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <p>{movies.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
