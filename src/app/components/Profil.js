"use client"

import Image from "next/image";
import { useEffect, useRef } from "react"

const Profil = () => {

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
        <section id="profil" className="min-h-screen flex flex-col items-center justify-center px-6 fade-in"
            ref={ref} >
            <Image
                src="/globe.svg"
                alt="Photo de profil"
                width={160}
                height={160}
                priority={true}
                className="rounded-full shadow-lg mb-6"
            />
            <h1 className="text-6xl font-bold text-white mb-4">Yoann Kerlogot</h1>
            <p className="text-lg text-center text-gray-700 max-w-2xl">
                {`Je suis un passionné de développement et danalyse de données. J'aime créer des projets innovants et
                partager mes connaissances.`}
            </p>
        </section>
    )
}

export default Profil; 