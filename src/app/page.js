"use client"

import dynamic from "next/dynamic";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Profil = dynamic(() => import("./components/Profil"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Hobbies = dynamic(() => import("./components/Hobbies"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

export default function Home() {

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-min-h-screen">
      <nav className="navbar fixed flex justify-between top-0 w-full py-4 shadow-lg border-b border-gray-600 z-50">
        <ul className="flex justify-center space-x-6 mx-8">
          <li><a onClick={() => handleScroll("#profil")} aria-label="Aller à la section Profil" className="cursor-pointer">Profil</a></li>
          <li><a onClick={() => handleScroll("#projects")} aria-label="Aller à la section Profil" className="cursor-pointer">Projets</a></li>
          <li><a onClick={() => handleScroll("#hobbies")} aria-label="Aller à la section Profil" className="cursor-pointer">Hobbies</a></li>
          <li><a onClick={() => handleScroll("#contact")} aria-label="Aller à la section Profil" className="cursor-pointer">Contact</a></li>
        </ul>
        <ThemeSwitcher />
      </nav>

      <div className="pt-20">
        <Profil />
        <Projects />
        <Hobbies />
        <Contact />
      </div>

    </main>
  );
};






