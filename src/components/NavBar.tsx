import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4  bg-primary-SemiDarkBlue sm:rounded-lg">
      <Link href="/">
        <img src="/images/logo.svg" alt="" className="w-6 sm:w-8" />
      </Link>
      <div className="flex space-x-4 items-center sm:space-x-6">
        <Link href="/">
          <img src="/images/icon-nav-home.svg" alt="" />
        </Link>
        <Link href="/movies">
          <img src="/images/icon-nav-movies.svg" alt="" className="" />
        </Link>
        <Link href="/TV-Series">
          <img src="/images/icon-nav-tv-series.svg" alt="" />
        </Link>
        <Link href={""}>
          <img src="/images/icon-nav-bookmark.svg" alt="" />
        </Link>
      </div>
      <Link href={""}>
        <img
          src="/images/image-avatar.png"
          alt=""
          className="border border-white rounded-full w-6 sm:w-8"
        />
      </Link>
    </div>
  );
}
