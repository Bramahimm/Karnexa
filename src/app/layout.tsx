import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import AnimationProvider from "@/components/shared/AnimationProvider";
import Navbar from "@/components/shared/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KARNEXA | Next Career. Real Action.",
  description:
    "A premium portfolio experience for the next generation of careers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen antialiased text-white bg-linear-to-br from-karnexa-dark via-karnexa-void to-karnexa-deep`}>
        <AnimationProvider>
          <CustomCursor />
          <Navbar />
          <div className="relative z-10">
            {children}{" "}
          </div>
        </AnimationProvider>
      </body>
    </html>
  );
}
