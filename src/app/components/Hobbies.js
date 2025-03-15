"use client"

import { animate } from "motion";
import { FaMusic, FaGamepad, FaCode, FaBook, FaCamera, FaBacteria } from "react-icons/fa";
import { useEffect, useRef } from "react"

const hobbyList = [
    { name: "Musique", icon: <FaMusic className="text-red-500 text-4xl" /> },
    { name: "Jeux vidéo", icon: <FaGamepad className="text-blue-500 text-4xl" /> },
    { name: "Code", icon: <FaCode className="text-green-500 text-4xl" /> },
    { name: "Lecture", icon: <FaBook className="text-yellow-500 text-4xl" /> },
    { name: "Photographie", icon: <FaCamera className="text-purple-500 text-4xl" /> },
    { name: "Bactéries", icon: <FaBacteria className="text-green-800 text-4xl" /> },
];

const Hobbies = () => {

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
            <h2 className="text-3xl font-semibold mb-8">Mes Hobbies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {hobbyList.map((hobby, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {hobby.icon}
                        <p className="mt-2 text-lg">{hobby.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hobbies;