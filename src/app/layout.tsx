import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/shared/Footer";
import AnimationProvider from "@/components/shared/AnimationProvider";
import { CursorProvider } from "@/components/shared/CursorProvider";
import Navbar from "@/components/shared/Navbar";
import SceneWrapper from "@/components/canvas/SceneWrapper";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KARNEXA | Next Career. Real Action.",
  description: "A premium portfolio experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="karnexa.ico"/>
      </head>
      <body className={`${inter.className} `}>
        <AnimationProvider>
          <CursorProvider>
            <SceneWrapper />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </CursorProvider>
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  );
}