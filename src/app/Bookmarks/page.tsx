"use client";

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookMarks() {
  const { items } = useContext(BookContext);

  return (
    <div>
      {items.map((item: any, index: number) => (
        <div key={index}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
