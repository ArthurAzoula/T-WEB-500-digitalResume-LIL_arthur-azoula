import React, { useState, useEffect } from 'react';
import data from '../data/experiences.json';
import Sort from '../icons/Sort';
import Calendar from '../icons/Calendar';
import Location from '../icons/Location';
import Code from '../icons/Code';
import House from '../icons/House';
import SectionTitle from './SectionTitle';

function Experience() {
    const [experiences, setExperiences] = useState(data.experiences);
    const [activeExperience, setActiveExperience] = useState(null);

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

    const handleExperienceClick = (index) => {
        setActiveExperience(index);
    };

    return (
        <div id='#experience' className="bg-chamoisee text-champagne relative m-12 rounded-lg p-8">
            <SectionTitle title={"Mes expériences profesionnelles"} />
            <div className="flex items-center">
                <button
                    onClick={sortByDate}
                    className="bg-black-raisin text-soft-mint-green py-2 px-4 rounded-lg mb-4 mx-auto inline-block"
                >
                    <div className="flex items-center">
                        <Sort /><p className="ml-2">Trier par date</p>
                    </div>
                </button>
            </div>
            <div className="relative overflow-hidden">
                <ul className="flex flex-wrap justify-center space-x-4 mt-4">
                    {experiences.map((experience, index) => (
                        <li
                            key={experience.id}
                            className={`w-72 h-auto text-chamoisee flex flex-col items-start  rounded-lg bg-champagne cursor-pointer ${activeExperience === index ? "font-semibold" : ""}`}
                            onClick={() => handleExperienceClick(index)}
                        >
                            <div className="relative w-full h-40 overflow-hidden">
                                <img
                                    src={`./public/${experience.photoUrl}`}
                                    alt={experience.entreprise}
                                    className="w-full h-full object-cover border-b-4 border-chamoisee"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex text-xl font-semibold">
                                    <Location /><span className='ml-2'>{experience.entreprise.toUpperCase()}</span>
                                </div>
                                <div className="flex text-light-sky-marron text-sm mt-2">
                                    <Calendar /><span className="ml-2">{experience.date}</span>
                                </div>
                                <div className="flex text-light-sky-marron text-sm mt-2">
                                    <Code /><span className="ml-2">{experience.poste}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col items-center justify-center h-full mt-8 text-justify w-full">
                    {activeExperience !== null && (
                        <div
                            className={`bg-bole p-4 rounded-md shadow-md mb-4 ${activeExperience % 2 === 0 ? "ml-8" : "mr-8"}`}
                        >
                            <div className="absolute left-0 top-0 bottom-0 h-0.5 bg-light-sky-marron w-20"></div>
                            <div className="flex items-center mb-2">
                                <div className="w-6 h-6 rounded-full bg-light-marron flex items-center justify-center mr-2">
                                    <i className="text-soft-mint-green text-xs">
                                        {activeExperience + 1}
                                    </i>
                                </div>
                               
                                    <h2 className="text-xl font-semibold">
                                    <div className='flex'>
                                        <House /><span className='ml-2'>{experiences[activeExperience].poste} chez{" "}
                                        {experiences[activeExperience].entreprise}</span>
                                    </div>
                                    </h2>
                               
                                
                            </div>
                            <p className="text-light-sky-marron">
                                <div className='flex'>
                                    <Calendar /><span className='ml-2'>{experiences[activeExperience].date}</span>
                                </div>
                                
                            </p>
                            <p className="text-light-sky-marron">
                                <div className='flex'>
                                    <Code /><span className='ml-2'>{experiences[activeExperience].description}</span>
                                </div>
                                
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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
