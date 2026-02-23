import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flemming | Full Stack Developer",
  description: "Portfolio website of Flemming Sikali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white"> 

        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
