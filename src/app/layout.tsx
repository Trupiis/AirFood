
import type { Metadata } from "next";
import {Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const greatVibes = localFont({
  src: "../fonts/GreatVibes.ttf",
  variable: "--font-mi-fuente-1",
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Flowing | Serivicios de lujo",
  description: "Somos una empresa gastronomica dedicada a brindar servicios de lujos para comensales de lujo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/xck4doz.css"/>
      </head>
      <body
        className={`${greatVibes.variable} ${playfair.variable} ${inter.variable} box-border overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
