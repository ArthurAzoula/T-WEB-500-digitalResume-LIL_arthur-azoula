import React, { useState, useEffect } from 'react';
import data from '../data/experiences.json';
import { Element, animateScroll as scroll } from 'react-scroll';

function Experience() {
    const [sortedExperiences, setSortedExperiences] = useState(data.experiences);

    const sortByDate = () => {
        const sorted = [...sortedExperiences].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
        setSortedExperiences(sorted);
    };

    useEffect(() => {
        sortByDate();
        // Ajoutez d'autres effets d'animation ici si nécessaire
    }, []);

    return (
        <div className="relative p-8">
            <h1 className="text-2xl font-semibold text-center mb-4">Mon Parcours Professionnel</h1>
            <button
                onClick={sortByDate}
                className="bg-black-raisin text-soft-mint-green py-2 px-4 rounded-full mb-4 mx-auto inline-block"
            >
                Trier par date
            </button>
            <div className="relative">
                {sortedExperiences.map((experience, index) => (
                    <Element
                        key={experience.id}
                        name={`experience${index}`}
                    >
                        <div
                            className={`bg-bole p-4 rounded-md shadow-md mb-4 ${index % 2 === 0 ? 'ml-8' : 'mr-8'
                                }`}
                        >
                            <div className="absolute left-0 top-0 bottom-0 h-0.5 bg-light-sky-marron w-20"></div>
                            <div className="flex items-center mb-2">
                                <div className="w-6 h-6 rounded-full bg-light-marron flex items-center justify-center mr-2">
                                    <i className="text-soft-mint-green text-xs">{index + 1}</i>
                                </div>
                                <h2 className="text-xl font-semibold">{experience.poste} chez {experience.entreprise}</h2>
                            </div>
                            <p className="text-light-sky-marron">{experience.date}</p>
                            <p className="text-light-sky-marron">{experience.description}</p>
                            {experience.projets && (
                                <ul className="list-disc pl-6 mt-2">
                                    {experience.projets.map((projet) => (
                                        <li key={projet.nom} className="text-light-sky-marron">
                                            {projet.nom}: {projet.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Element>
                ))}
            </div>
        </div>
    );
}

export default Experience;
