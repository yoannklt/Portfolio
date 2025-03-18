"use client"

import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const ref = useRef(null);

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const response = await fetch("http://127.0.0.1:8000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message envoyé avec succès!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Erreur lors de l'envoi du message.");
            }
        } catch (error) {
            setStatus("Erreur de connexion au serveur.");
        }
    };

    return (
        <section ref={ref} id="contact" className="min-h-screen pt-6 flex flex-col items-center justify-center px-6 fade-in">
            <h2 className="text-4xl font-semibold mb-8">Me Contacter</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Votre nom"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Votre email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Votre message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-300 cursor-pointer"
                >
                    Envoyer
                </button>
                {status && <p className="text-center mt-4">{status}</p>}
            </form>
        </section>
    )
};

export default Contact; 