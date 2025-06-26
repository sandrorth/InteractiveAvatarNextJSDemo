import "@/styles/globals.css";
import { Metadata } from "next";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

import NavBar from "@/components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "TribeMD Avatars",
    template: `%s - TribeMD Avatars`,
  },
  icons: {
    icon: "https://tribemd.com/_image?href=%2F_astro%2Fimg_base_tribe_logo.9SlBSC8C.svg&f=svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} font-sans`}
      lang="en"
    >
      <head />
      <body className="min-h-screen bg-black text-white">
        <main className="relative flex flex-col gap-6 h-screen w-screen">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
