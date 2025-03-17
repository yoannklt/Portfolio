import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // TEMPORAIRE
  title: "Yoann Kerlogot | Portoflio",
  description: "Découvrez mon portfolio, mes projets et mes compétences en développement et data analyse.",
  openGraph: {
    title: "Yoann Kerlogot | Portfolio",
    description: "Découvrez mes projets et mes compétences.",
    url: "http://localhost:3000", // TEMPORAIRE
    siteName: "Yoann Kerlogot Portfolio",
    images: [
      {
        url: "http://localhost:3000/preview.jpg", // TEMPORAIRE
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
    images: ["http://localhost:3000/preview.jpg"] // TEMPORAIRE
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="description" content="Découvrez mon portfolio, mes projets et mes compétences en développement et data analyse." />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
