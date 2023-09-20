import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const font = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="xl:flex  max-w-7xl xl:m-auto xl:gap-4 ">
          <div className="flex xl:mt-9">
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
