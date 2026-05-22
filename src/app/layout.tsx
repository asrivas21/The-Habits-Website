import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, GFS_Didot } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gfsDidot = GFS_Didot({
  variable: "--font-didot-google",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Habits",
  description: "The Habits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} ${gfsDidot.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
