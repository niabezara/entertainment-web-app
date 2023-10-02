"use client";
import React, { createContext, useState, ReactNode } from "react";

interface Book {
  title: string;
}

interface BookContextProps {
  items: Book[];
  addToBook: (book: Book) => void;
}

const initialContext: BookContextProps = {
  items: [],
  addToBook: () => {},
};

const BookContext = createContext<BookContextProps>(initialContext);

interface BookProviderProps {
  children: ReactNode;
}

export function BookProvider({ children }: BookProviderProps) {
  const [items, setItems] = useState<Book[]>([]);

  const addToBook = ({ title }: Book) => {
    setItems((prevState) => [...prevState, { title }]);
  };

  return (
    <BookContext.Provider value={{ items, addToBook }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
