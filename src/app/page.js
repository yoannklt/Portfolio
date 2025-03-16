"use client"

import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Profil = dynamic(() => import("./components/Profil"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Hobbies = dynamic(() => import("./components/Hobbies"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

export default function Home() {

  return (
    <main className="min-min-h-screen">
      <nav className="navbar fixed flex justify-between top-0 w-full py-4 shadow-lg border-b border-gray-600 z-50">
        <ul className="flex justify-center space-x-6 mx-8">
          <li><Link to="profil" smooth={true} duration={500} offset={-50} className="cursor-pointer">Profil</Link></li>
          <li><Link to="projects" smooth={true} duration={500} offset={-50} className="cursor-pointer">Projets</Link></li>
          <li><Link to="skills" smooth={true} duration={500} offset={-50} className="cursor-pointer">Compétences</Link></li>
          <li><Link to="hobbies" smooth={true} duration={500} offset={-50} className="cursor-pointer">Hobbies</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer">Contact</Link></li>
        </ul>
        <ThemeSwitcher />
      </nav>

      <div className="pt-20">
        <Profil />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
      </div>

    </main>
  );
};






