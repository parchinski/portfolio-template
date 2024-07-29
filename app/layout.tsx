import "./globals.css";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Metadata from "next";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com/"),
  title: "Bryant Parchinski Portfolio",
  description: "This is a portfolio website for Bryant Parchinski, a software engineer based in the United States.",
  generator: "Next.js",
  applicationName: "Bryant Parchinski Portfolio",
  keywords: [
    "Portfolio template",
    "Eldora UI",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Bryant Parchinski Portfolio",
    description:
      "Portfolio for Bryant Parchinski built with React, Typescript, Tailwind CSS, Eldora UI, and Framer Motion. 100% open-source, and customizable.",
    url: "https://www.bryantpdev.com/",
    siteName: "www.bryantpdec.com",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Bryant Parchinski Home",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryant Parchinski Portfolio",
    description:
      "Bryant Parchinski Portfolio - Portfolio for Bryant Parchinski built with React, Typescript, Tailwind CSS, Eldora UI, and Framer Motion. 100% open-source, and customizable.",
    creator: "@bryantpdev",
    creatorId: "0000000000",
    images: ["./public/metadata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "index": true,
      "follow": false,
      "noimageindex": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}>{children}</body>
    </html>
  );
}
