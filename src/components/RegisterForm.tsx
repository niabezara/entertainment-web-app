"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlesubmit = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("all fields!!!!!!!");
      return;
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError("user already exists");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log("errrorr", error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <img src="/images/logo.svg" alt="" className="mb-16" />
      <div className="shadow-lg p-8 rounded-3xl bg-primary-SemiDarkBlue">
        <h1 className="text-xl text-white mb-9">Register</h1>
        <form
          action=""
          className=" flex flex-col gap-3"
          onSubmit={handlesubmit}
        >
          <input
            className="text-white bg-transparent border-b-2 border-#5A698F text-xs mb-2 pb-2"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="text-white bg-transparent border-b-2 border-#5A698F text-xs mb-2 pb-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="text-white bg-transparent border-b-2 border-#5A698F text-xs mb-2 pb-2"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-Red text-white cursor-pointer px-6 py-2  rounded-md">
            Create an account
          </button>
          {error && (
            <div className="bg-red-500 text-white text-sm py-1 rounded-md px-3 w-fit">
              {error}
            </div>
          )}
          <Link href={"/"} className="text-sm mt-3 text-right text-white">
            Already have an account &#63;{" "}
            <span className=" text-red-500">Login</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
