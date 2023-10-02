import LoginForm from "../components/Loginform";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}
