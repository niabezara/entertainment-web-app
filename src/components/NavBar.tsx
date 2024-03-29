"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isEntryOpened, setIsEntryOpened] = useState<boolean>(false);
  const router = useRouter();
  const avatarClickHandler = () => {
    setIsEntryOpened((prevState) => !prevState);
  };

  const { data: session } = useSession();
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };
  const handleLoginClick = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-between w-full items-center p-4 relative bg-primary-SemiDarkBlue sm:rounded-lg xl:flex-col xl:justify-between xl:h-[32rem] xl:w-24 xl:rounded-3xl">
      <Link href="/">
        <img
          src="/images/logo.svg"
          alt=""
          className="w-6 sm:w-8 hover:cursor-pointer"
        />
      </Link>
      <div className="flex space-x-4 items-center sm:space-x-6 xl:flex-col xl:justify-between xl:items-center xl:space-y-6 xl:space-x-0">
        <Link href="/">
          <svg
            className="logo-img"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link href="/movies">
          <svg
            className="logo-img"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link href="/TV-Series">
          <svg
            className="logo-img"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
        <Link href="/Bookmarks">
          <svg
            className="logo-img"
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
        </Link>
      </div>
      <div
        className="border-white rounded-full w-10 h-10"
        onClick={avatarClickHandler}
      >
        <img src="/images/image-avatar.png" alt="" />
      </div>
      {isEntryOpened && (
        <div
          onClick={avatarClickHandler}
          className="absolute w-60 bg-primary-SemiDarkBlue rounded-xl text-white bottom-[-6rem]  right-[0rem] p-6 flex flex-col gap-6 xl:right-[-16rem] xl:bottom-0 z-40"
        >
          <button
            onClick={session ? handleSignOut : handleLoginClick}
            className="w-full h-8 rounded-lg bg-red-500 text-white font-inherit text-base cursor-pointer transition-transform duration-300 ease-in border-none"
          >
            {session ? "Log Out" : "Log In"}
          </button>
        </div>
      )}
    </div>
  );
}
