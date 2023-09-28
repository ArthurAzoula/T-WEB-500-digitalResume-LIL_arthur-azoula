import React, { useState, useEffect } from 'react';
import data from '../data/experiences.json';
import { Element, animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Utilisez useAnimation au lieu de useScroll
import Sort from '../icons/Sort';

function Experience() {
    const [experiences, setExperiences] = useState(data.experiences); // Utilisez "experiences" plutôt que "sortedExperiences"
    const [activeExperience, setActiveExperience] = useState(null);

    // Corrigez le nom de la fonction de tri par date
    const sortByDate = () => {
        const sorted = [...experiences].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
        setExperiences(sorted);
    };

    useEffect(() => {
        sortByDate();
    }, []);

    const experienceVariants = {
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

    const handleExperienceClick = (index) => {
        setActiveExperience(index);
    };

    return (
        <div className="bg-chamoisee text-champagne relative m-12 rounded-lg p-8">
            <h1 className="text-2xl font-semibold text-center mb-4">Mon Parcours Professionnel</h1>
            <div className='flex items-center'>
                <button
                    onClick={sortByDate}
                    className="bg-black-raisin text-soft-mint-green py-2 px-4 rounded-lg mb-4 mx-auto inline-block"
                >
                    <div className='flex items-center'>
                        <Sort /><p className='ml-2'>Trier par date</p>
                    </div>

                </button>
            </div>
            <div className="relative overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-20 h-1 rounded-full bg-light-sky-marron"></div>
                    <ul className="list-disc pl-6 mt-2">
                        {experiences.map((experience, index) => (
                            <li
                                key={experience.id}
                                className={`text-light-sky-marron cursor-pointer ${activeExperience === index ? "font-semibold" : ""
                                    }`}
                                onClick={() => handleExperienceClick(index)}
                            >
                                {experience.date}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    {activeExperience !== null && (
                        <motion.div
                            className={`bg-bole p-4 rounded-md shadow-md mb-4 ${activeExperience % 2 === 0 ? "ml-8" : "mr-8"
                                }`}
                            variants={experienceVariants}
                            initial="hidden"
                            animate="visible"
                            viewport={{
                                once: false,
                                margin: "0px 0px 0px 0px",
                            }}
                        >
                            <div className="absolute left-0 top-0 bottom-0 h-0.5 bg-light-sky-marron w-20"></div>
                            <div className="flex items-center mb-2">
                                <div className="w-6 h-6 rounded-full bg-light-marron flex items-center justify-center mr-2">
                                    <i className="text-soft-mint-green text-xs">
                                        {activeExperience + 1}
                                    </i>
                                </div>
                                <h2 className="text-xl font-semibold">
                                    {experiences[activeExperience].poste} chez{" "}
                                    {experiences[activeExperience].entreprise}
                                </h2>
                            </div>
                            <p className="text-light-sky-marron">
                                {experiences[activeExperience].date}
                            </p>
                            <p className="text-light-sky-marron">
                                {experiences[activeExperience].description}
                            </p>
                            {experiences[activeExperience].projets && (
                                <ul className="list-disc pl-6 mt-2">
                                    {experiences[activeExperience].projets.map(
                                        (projet) => (
                                            <li
                                                key={projet.nom}
                                                className="text-light-sky-marron"
                                            >
                                                {projet.nom}: {projet.description}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
