"use client"

import { FaMusic, FaGamepad, FaCode, FaBook, FaCamera, FaBacteria } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


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
        <Projets />
        <Competences />
        <Hobbies />
        <Contact />
      </div>

    </main>
  );
};

const Profil = () => {
  return (
    <motion.section
      id="profil"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pb-20"
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
        priority={true}
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
      className="min-h-screen flex flex-col items-center justify-center px-6 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={160}
              loading="lazy"
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
  { name: "JavaScript", level: "80%" },
  { name: "Python", level: "75%" },
  { name: "C++", level: "70%" },
];

const Competences = () => {
  return (
    <motion.section
      id="competences"
      className="min-h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Compétences</h2>
      <div className="w-full max-w-xl">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg">{skill.name}</p>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: skill.level }} />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const hobbies = [
  { name: "Musique", icon: <FaMusic className="text-red-500 text-4xl" /> },
  { name: "Jeux vidéo", icon: <FaGamepad className="text-blue-500 text-4xl" /> },
  { name: "Code", icon: <FaCode className="text-green-500 text-4xl" /> },
  { name: "Lecture", icon: <FaBook className="text-yellow-500 text-4xl" /> },
  { name: "Photographie", icon: <FaCamera className="text-purple-500 text-4xl" /> },
  { name: "Bactéries", icon: <FaBacteria className="text-green-800 text-4xl" /> },
];

const Hobbies = () => {
  return (
    <motion.section
      id="hobbies"
      className="h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Mes Hobbies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center">
            {hobby.icon}
            <p className="mt-2 text-lg">{hobby.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://127.0.0.1:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Erreur de connexion au serveur.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 pb-20">
      <h2 className="text-3xl font-semibold mb-8">Me Contacter</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Votre message"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-300"
        >
          Envoyer
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </section>
  )
}