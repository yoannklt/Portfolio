"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
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
        <Projets />
        <Competences />
        <Section id="hobbies" title="Hobbies" />
        <Section id="contact" title="Contact" />
      </div>

    </main>
  );
};

const Section = ({ id, title }) => {
  return (
    <motion.section
      id={id}
      className="h-screen flex items-center justify-center border-b border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl">
        {title}
      </h2>
    </motion.section>
  );
};

const Profil = () => {
  return (
    <motion.section
      id="profil"
      className="h-screen flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src="/globe.svg"
        alt="Photo de profil"
        width={160}
        height={160}
        className="rounded-full shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-white mb-4">Yoann</h1>
      <p className="text-lg text-gray-400 max-w-2xl">
        Je suis un passionné de développement et danalyse de données. Jaime créer des projets innovants et
        partager mes connaissances.
      </p>
    </motion.section>
  )
}

const Projets = () => {
  const projects = [
    { title: "Portfolio", description: "Mon site personnel en Next.js et FastAPI.", image: "/globe.svg" },
    { title: "Jeu de rythme", description: "Un projet inspiré de Osu! en C#.", image: "/globe.svg" },
    { title: "Outil d'analyse de données", description: "Un outil réalisé en Python permettant l'analyse de données et la rédaction de graphes.", image: "/globe.svg" },
    { title: "Outil d'analyse de données", description: "Un outil réalisé en Python permettant l'analyse de données et la rédaction de graphes.", image: "/globe.svg" }
  ]

  return (
    <motion.section
      id="projets"
      className="h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={160}
              className="object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "75%" },
  { name: "Python", level: "60%" },
  { name: "C++", level: "50%" }
];

const Competences = () => {
  return (
    <motion.section
      id="competences"
      className="h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Compétences</h2>
      <div className="w-full max-w-xl">
        {skills.map((skill, index) => {
          <div key={index} className="mb-4">
            <p className="text-lg">{skill.name}</p>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <motion.div
                className="bg-red-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        })}
      </div>
    </motion.section>
  )
}