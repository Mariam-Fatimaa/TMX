import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TMX Digital Solutions",
    template: "%s | TMX Digital Solutions",
  },

  description:
    "Design and development solutions for modern digital businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}