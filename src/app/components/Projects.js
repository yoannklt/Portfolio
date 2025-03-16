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
        { title: "Portfolio", description: "Mon site personnel en Next.js et FastAPI.", image: "/images/profile-image.webp" },
        { title: "Jeu de rythme", description: "Un projet inspiré de Osu! en C#.", image: "/globe.svg" },
        { title: "Analyse de données", description: "Un outil permettant l'analyse de données.", image: "/globe.svg" },
    ]

    return (
        <section id="projects" className="projects-section"
            ref={ref} >
            <h2 className="text-[48px] font-bold itali mb-8">Mes Projets</h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={180}
                            height={140}
                            loading="lazy"
                            className="project-image rounded-xl"
                        />
                        <div className="project-text">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;