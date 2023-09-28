import React, { useState } from 'react';
import data from '../data/experiences.json';

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

    return (
        <div>
            <button onClick={sortByDate}>Trier par date</button>
            {sortedExperiences.map((experience) => (
                <div key={experience.id}>
                    <h2>{experience.poste} chez {experience.entreprise}</h2>
                    <p>{experience.date}</p>
                    <p>{experience.description}</p>
                    {experience.projets && (
                        <ul>
                            {experience.projets.map((projet) => (
                                <li key={projet.nom}>{projet.nom}: {projet.description}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Experience;
