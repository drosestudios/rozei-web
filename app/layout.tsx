"use client";

import "../styles/globals.css";
import Script from "next/script";
import React from "react";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const Announcement = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center py-3 bg-[#1a1a1a]">
      <motion.p
        className="font-regular text-white text-sm text-center sm:text-left"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        The beta will soon be {" "}
        <strong className="text-emerald-50">available</strong> {" "}
        to the public.
      </motion.p>
      <motion.div
        className="hidden sm:flex"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link href={'/articles/rozei-public-beta-coming-soon'}
          className="font-bold text-white hover:opacity-80 hover:underline text-sm text-center">
          Read more on our blog
        </Link>
      </motion.div>
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="@/components/themetoggle/useDarkMode.jsx"/>

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>
        <link rel="icon" href="/image3.png"/>
      </head>

      <body className="dark:bg-[#111111] overflow-x-hidden bg-white dark:text-white">
        <div className="flex flex-col min-h-screen">
          <Announcement />
          <Header />
          <main className="flex-1" >{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
