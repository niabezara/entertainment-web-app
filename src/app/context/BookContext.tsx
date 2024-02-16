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
  removeFromBook: (title: string) => void;
}

export const BookContext = createContext<BookContextProps>({
  items: [],
  addToBook: () => {},
  removeFromBook: () => {},
});

export const BookProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Book[]>([]);

  const addToBook = ({ title, thumbnail, year, category, rating }: Book) => {
    setItems((prevItems) => [
      ...prevItems,
      { title, thumbnail, year, category, rating },
    ]);
  };

  const removeFromBook = (title: string) => {
    setItems((prevState) => prevState.filter((movie) => movie.title !== title));
  };

  return (
    <BookContext.Provider value={{ items, addToBook, removeFromBook }}>
      {children}
    </BookContext.Provider>
  );
};
