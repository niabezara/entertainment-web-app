"use client";

import React, { createContext, useState, PropsWithChildren } from "react";

interface Book {
  title: string;
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

  const addToBook = ({ title }: Book) => {
    setItems((prevState) => [...prevState, { title }]);
  };

  return (
    <BookContext.Provider value={{ items, addToBook }}>
      {children}
    </BookContext.Provider>
  );
};
