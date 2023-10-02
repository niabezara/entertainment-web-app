"use client";
import React, { createContext, useState, PropsWithChildren } from "react";

interface Book {
  title: string;
  thumbnail: any;
  year: number;
  category: string;
  rating: string;
}

interface BookContextProps {
  items: Book[];
  addToBook: ({ title }: Book) => void;
}

export const BookContext = createContext<BookContextProps>({
  items: [],
  addToBook: () => {},
});

export const BookProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Book[]>([]);

  const addToBook = ({ title, thumbnail, year, category, rating }: Book) => {
    setItems((prevState) => [
      ...prevState,
      { title, thumbnail, year, category, rating },
    ]);
  };
  return (
    <BookContext.Provider value={{ items, addToBook }}>
      {children}
    </BookContext.Provider>
  );
};

// {
//   "title": "Beyond Earth",
//   "thumbnail": {
//     "trending": {
//       "small": "/assets/thumbnails/beyond-earth/trending/small.jpg",
//       "large": "/assets/thumbnails/beyond-earth/trending/large.jpg"
//     },
//     "regular": {
//       "small": "/assets/thumbnails/beyond-earth/regular/small.jpg",
//       "medium": "/assets/thumbnails/beyond-earth/regular/medium.jpg",
//       "large": "/assets/thumbnails/beyond-earth/regular/large.jpg"
//     }
//   },
//   "year": 2019,
//   "category": "Movie",
//   "rating": "PG",
//   "isBookmarked": false,
//   "isTrending": true
// },
