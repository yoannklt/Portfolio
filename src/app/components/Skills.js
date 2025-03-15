"use client"

import { animate } from "framer-motion";
import { useEffect, useRef } from "react"

const skillsList = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "Python", level: "75%" },
    { name: "C++", level: "70%" },
];

const Skills = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate(entry.target, { opacity: 1, y: 0 }, { duration: 0.6, easing: "easeOut" });
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6"
            ref={sectionRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
            <h2 className="text-3xl font-semibold mb-8">Compétences</h2>
            <div className="w-full max-w-xl">
                {skillsList.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-lg">{skill.name}</p>
                        <div className="w-full bg-gray-800 rounded-full h-4">
                            <div className="bg-red-500 h-4 rounded-full" style={{ width: skill.level }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;