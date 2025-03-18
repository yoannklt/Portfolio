"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFastapi, SiUnity, SiPython } from "react-icons/si";

const skillsIcons = {
    React: FaReact,
    "Next.js": SiNextdotjs,
    TailwindCSS: SiTailwindcss,
    FastAPI: SiFastapi,
    Unity: SiUnity,
    Python: SiPython
};

const Projects = () => {

    const ref = useRef(null);

    const [projects, setProjects] = useState([]);
    const fetched = useRef(false);

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

    useEffect(() => {
        if (!fetched.current) {
            fetched.current = true;
            fetch("http://127.0.0.1:8000/projects")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`Erreur HTTP: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    if (!data.projects) {
                        throw new Error(`Réponse API invalide`);
                    }
                    setProjects(data.projects);
                })
                .catch((err) => console.error("Erreur lors du chargement des projets: ", err.message));
        }
    }, [])

    return (
        <section id="projects" className="projects-section fade-in" ref={ref} >
            <h2 className="text-4xl font-bold mb-8">Mes Projets</h2>

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
                            {project.skills.map((skill, i) => {
                                const Icon = skillsIcons[skill]; // Associe la string à son icône
                                return Icon ? <Icon key={i} className={`skill-icon ${skill.toLowerCase()}`} /> : null;
                            })}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects;