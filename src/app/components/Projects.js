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
        {
            title: "Porfolio",
            description: "Mon propre site portfolio!",
            image: "/images/profile-image.webp",
            skills: ["React", "MongoDB", "FastAPI"],
        },
        {
            title: "Jeu de rythme",
            description: "Un jeu de rythme inspiré de Osu! en C#.",
            image: "/globe.svg",
            skills: ["C#", "Unity"],
        },
        {
            title: "Outil d'analyse de données",
            description: "Outil réalisé pour permettre l'analyse de données et la rédactions de graphes",
            image: "/globe.svg",
            skills: ["Python", "Pandas", "Plotly"],
        },
    ];


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
                            <p className="skills">
                                {project.skills.map((skill, i) => (
                                    <span key={i}>{skill} </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;