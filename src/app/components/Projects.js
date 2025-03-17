"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFastapi, SiUnity, SiPython } from "react-icons/si";

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
            title: "Portfolio",
            description: "Mon portfolio personnel avec Next.js et FastAPI.",
            image: "/images/profile-image.webp",
            repository: "https://github.com/yoannklt/portfolio",
            skills: [
                { icon: FaReact, className: "react" },
                { icon: SiNextdotjs, className: "nextjs" },
                { icon: SiTailwindcss, className: "tailwind" },
                { icon: SiFastapi, className: "fastapi" },
            ],
        },
        {
            title: "Jeu de rythme",
            description: "Un jeu de rythme inspiré d'Osu! développé en Unity.",
            image: "/globe.svg",
            repository: "",
            skills: [
                { icon: SiUnity, className: "unity" },
            ],
        },
        {
            title: "Analyse de données",
            description: "Projet permettant l'analyse des données de sites internet.",
            image: "/globe.svg",
            repository: "",
            skills: [
                { icon: SiPython, className: "python" },
            ],
        },

    ];


    return (
        <section id="projects" className="projects-section" ref={ref} >
            <h2 className="text-[48px] font-bold mb-8">Mes Projets</h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={180}
                            height={140}
                            loading="lazy"
                            className="project-img rounded-xl"
                        />
                        <div className="project-text">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-logos">
                            {project.skills.map(({ icon: Icon, className }, i) => (
                                <Icon key={i} className={`skill-icon ${className}`} />
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects;