"use client"

import dynamic from "next/dynamic";

const Profil = dynamic(() => import("./components/Profil"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Hobbies = dynamic(() => import("./components/Hobbies"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-min-h-screen">
      <nav className="fixed-top-0 w-full bg-gray-800 py-4 shadow-lg z-50">
        <ul className="flex justify-center space-x-6">
          {["Profile", "Projects", "Compétences", "Hobbies", "Contact"].map((section) => (
            <li key={section} className="cursor-pointer px-4 py-2 rounded-md bg-gray-700">
              {section}
            </li>
          ))}
        </ul>
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






