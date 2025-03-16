"use client"

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
        <section id="hobbies" className="min-h-screen flex flex-col items-center justify-center px-6 fade-in"
            ref={ref} >
            <h2 className="text-5xl font-semibold mb-8">Mes Hobbies</h2>
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