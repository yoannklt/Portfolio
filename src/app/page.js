"use client"

import dynamic from "next/dynamic";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Profil = dynamic(() => import("./components/Profil"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Education = dynamic(() => import("./components/Education"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {


  return (
    <main className="min-min-h-screen">
      <nav className="navbar fixed flex justify-between top-0 w-full py-4 shadow-lg border-b border-gray-600 z-50">
        <ul className="flex justify-center space-x-6 mx-8">
          <li><a href="#profil" aria-label="Aller à la section Profil" className="cursor-pointer">Profil</a></li>
          <li><a href="#projects" aria-label="Aller à la section Projets" className="cursor-pointer">Projets</a></li>
          <li><a href="#education" aria-label="Aller à la section Education" className="cursor-pointer">Education</a></li>
          <li><a href="#contact" aria-label="Aller à la section Contact" className="cursor-pointer">Contact</a></li>
        </ul>
        <ThemeSwitcher />
      </nav>

      <div className="pt-20">
        <Profil />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};






