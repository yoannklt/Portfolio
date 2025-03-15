"use client"

import Image from "next/image";
import { animate } from "motion";
import { useEffect, useRef } from "react"

const Profil = () => {

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
        </section>
    )
}

export default Profil; 