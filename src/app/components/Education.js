"use client"

import { FaGraduationCap, FaFilePdf } from "react-icons/fa";
import { useEffect, useRef } from "react"

const education = [
    {
        title: "Formation Data Analyst",
        institution: "OpenClassrooms",
        date: "Novembre 2024 - Maintenant"
    },
    {
        title: "Bachelor Développement Informatique",
        institution: "Gaming Campus, Lyon",
        date: "Septembre 2022 - Juin 2024"
    },
    {
        title: "Bac Général (Maths, Physique-Chimie)",
        institution: "Lycée Colbert, Lyon",
        date: "2022"
    }
]

const Education = () => {

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

    return (
        <section ref={ref} id="education" className="education-section fade-in">
            <h2 className="text-4xl font-bold text-center mb-6">Éducation</h2>

            <div className="education-container">
                {education.map((item, index) => (
                    <div key={index} className="education-card">
                        <FaGraduationCap className="education-icon" />
                        <div className="education-info">
                            <h3>{item.title}</h3>
                            <p>{item.institution}</p>
                            <span>{item.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lien vers le CV */}
            <div className="cv-container">
                <a href="/documents/CV_Yoann_Kerlogot.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
                    <FaFilePdf className="cv-icon" /> Voir mon CV
                </a>
            </div>
        </section>
    )
}

export default Education;