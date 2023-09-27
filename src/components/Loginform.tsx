"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlesubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <img src="/images/logo.svg" alt="" className="mb-16" />
      <div className="shadow-lg p-8 rounded-3xl bg-primary-SemiDarkBlue ">
        <h1 className="text-xl text-white mb-9">Login</h1>
        <form
          action=""
          className=" flex flex-col gap-4"
          onSubmit={handlesubmit}
        >
          <input
            className="text-white bg-transparent border-b-2 border-#5A698F text-xs mb-2 pb-2 "
            type="text"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-white bg-transparent border-b-2 border-#5A698F text-xs mb-2 pb-2"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-Red text-white cursor-pointer px-6 py-2  rounded-md">
            Login to your account
          </button>
          {error && (
            <div className="bg-red-500 text-white text-sm py-1 rounded-md px-3 w-fit">
              {error}
            </div>
          )}
          <Link
            href={"/register"}
            className="text-sm mt-3 text-right text-white"
          >
            Dont have an account &#63;{" "}
            <span className="underline text-red-500">Sign Up</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
