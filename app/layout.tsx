"use client";
// import '@/app/globals.css'
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import 'animate.css';
import { useEffect, useState } from "react";
import Image from "next/image";
// import { start } from "repl";
import Navbar from "./component/navbar";
import Head from "next/head";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400','600','800','900'],
});

/* ------------------------- Metadata goes like this ------------------------ */

/* -------------------------- RootLayout goes here -------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="">
        <Navbar></Navbar>
 {/* ------- Marking childrens here can be used to load child components ------  */}
 {/* ------- while nav and other elements from main layout remains same -------  */}
        {children}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
