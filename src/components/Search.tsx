"use client";
import router, { useRouter } from "next/navigation";
import React, {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useDebounce } from "use-debounce";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  isHandling?: boolean;
}

export default function Search() {
  return (
    <div className="flex p-4 bg-transparent gap-4">
      <img src="/images/icon-search.svg" alt="" />
      <input
        className="bg-transparent w-full text-white"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
