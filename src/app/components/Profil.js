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
        <section id="profil" className="profile-section fade-in"
            ref={ref} >
            <Image
                src="/images/profile-image.webp"
                alt="Photo de profil"
                width={300}
                height={300}
                priority={true}
                className="profile-img"
            />
            <div className="profile-text">
                <h1>Yoann Kerlogot</h1>
                <p>
                    {`Je suis un étudiant passionné de développement et d'analyse de données. J'aime créer des projets innovants et
                    partager mes connaissances.
                    `}
                </p>
                <br />
                <p>
                    {`Je suis actuellement à la recherche d'un contrat d'alternance dans le secteur de la donnée.`}
                </p>
            </div>
        </section>
    )
}

export default Profil; 