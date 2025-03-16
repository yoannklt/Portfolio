import { Inter } from "next/font/google";
import "./globals.css";

import ThemeSwitcher from "./components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Yoann Kerlogot | Portoflio",
  description: "Découvrez mon portfolio, mes projets et mes compétences en développement et data analyse.",
  openGraph: {
    title: "Yoann Kerlogot | Portfolio",
    description: "Découvrez mes projets et mes compétences.",
    url: "https://yoannklt.com",
    siteName: "Yoann Kerlogot Portfolio",
    images: [
      {
        url: "/profil.jpg",
        width: 800,
        height: 800,
        alt: "Photo de profil Yoann"
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoann Kerlogot | Portfolio",
    description: "Découvrez mon portfolio et mes compétences.",
    images: ["/profil.jpg"]
  }
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
