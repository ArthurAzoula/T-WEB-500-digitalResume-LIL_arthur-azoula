import React from "react";
import Quote from "./Quote";
import { motion } from "framer-motion";

const About = () => {
    const aboutVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section id="about" className="text-champagne bg-chamoisee p-8 m-12 rounded-md shadow-md">
            <motion.div
                className=""
                variants={aboutVariants}
                initial="hidden"
                animate="visible"
                viewport={{
                    once: false,
                    margin: '0px 0px 0px 0px',
                }}
            >
                <div className="container mx-auto text-center">
                    <h1 className="md:text-6xl text-4xl font-bold mb-4">
                        FullStack <span className="text-soft-mint-green">Developer</span>
                    </h1>
                    <div className="flex flex-col items-center">
                        <p className="text-light-sky-marron mb-4">
                            At{" "}
                            <a
                                className="underline"
                                href="https://www.epitech.eu/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Epitech
                            </a>{" "}
                            Lille
                        </p>
                    </div>
                    <div className="container mx-auto flex-col md:flex-row flex justify-between mt-6 gap-4">
                        <div className="md:w-1/3 text-center bg-champagne rounded-lg p-2 text-dark-gray">
                            {/* Partie Hobbies */}
                            <h2 className="text-3xl font-semibold mb-2">Passions</h2>
                            <ul className="list-disc list-inside">
                                <li>Jouer aux jeux-vidéos</li>
                                <li>Explorer de nouvelles technologies</li>
                                <li>Ecouter de la musique</li>
                            </ul>
                        </div>
                        <div className="md:w-1/3 bg-champagne rounded-lg p-2 text-dark-gray">
                            {/* Partie À propos de moi */}
                            <h2 className="text-3xl font-semibold mb-2">À propos de moi</h2>
                            <p className="text-center">
                                Je m'appelle Arthur, et j'ai toujours été fasciné par la technologie. Je suis un vrai passionné (surtout quand il s'agit de jeux vidéo) !
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-champagne rounded-lg p-2 text-dark-gray">
                            {/* Autres informations */}
                            <h2 className="text-3xl font-semibold mb-2">Autres</h2>
                            <ul className="list-disc list-inside">
                                <li>Langues: Anglais - B1</li>
                                <li>Permis de conduire: B</li>
                                {/* Ajoutez d'autres informations ici */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <a
                        href="/CV_AZOULA_ARTHUR_2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-gray hover:-translate-y-1 hover:scale-110 duration-300 mt-8 text-champagne px-4 py-2 rounded-full hover:bg-mint-green transition duration-300"
                    >
                        Télécharger mon CV
                    </a>
                </div>

                <div className="mt-12">
                    <Quote
                        citation="Innovation distinguishes between a leader and a follower."
                        auteur="Steve Jobs"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
