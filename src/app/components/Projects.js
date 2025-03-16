"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

const Projects = () => {

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        { title: "Portfolio", description: "Mon site personnel en Next.js et FastAPI.", image: "/globe.svg" },
        { title: "Jeu de rythme", description: "Un projet inspiré de Osu! en C#.", image: "/globe.svg" },
        { title: "Outil d'analyse de données", description: "Un outil réalisé en Python permettant l'analyse de données et la rédaction de graphes.", image: "/globe.svg" },
        { title: "Outil d'analyse de données", description: "Un outil réalisé en Python permettant l'analyse de données et la rédaction de graphes.", image: "/globe.svg" }
    ]

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 fade-in"
            ref={ref} >
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
        </section>
    )
}

export default Projects;