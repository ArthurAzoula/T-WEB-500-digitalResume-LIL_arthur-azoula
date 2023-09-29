import React from "react";
import data from "../data/competences.json";

const Skills = () => {

    const getRandomWidth = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    const getSkillLevelWidth = (level) => {
        switch (level.toLowerCase()) {
            case "débutant":
                return`${getRandomWidth(10, 40)}%`;
            case "intermédiaire":
                return `${getRandomWidth(40, 70)}%`;    
            case "avancé":
                return `${getRandomWidth(70, 100)}%`;
            default:
                return "0%";
        }
    };

    const getSkillLevelClass = (level) => {
        switch (level.toLowerCase()) {
            case "débutant":
                return "bg-red-300"; // Couleur pour le niveau débutant
            case "intermédiaire":
                return "bg-yellow-300"; // Couleur pour le niveau intermédiaire
            case "avancé":
                return "bg-green-300"; // Couleur pour le niveau avancé
            default:
                return "bg-gray-300"; // Couleur par défaut
        }
    }

    const groupSkillsByType = (competences) => {
        const groupedSkills = {};
        competences.forEach((competence) => {
            if (!groupedSkills[competence.type]) {
                groupedSkills[competence.type] = [];
            }
            groupedSkills[competence.type].push(competence);
        });
        return groupedSkills;
    };

    const groupedSkills = groupSkillsByType(data.competences);

    return (
        <div className="bg-chamoisee text-champagne p-8 m-12 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold text-center mb-4">Skills</h1>
            {Object.keys(groupedSkills).map((type) => (
                <div key={type} className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">{type}</h2>
                    <div className="skills-list">
                        {groupedSkills[type].map((competence) => (
                            <div key={competence.id} className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">{competence.nom}</h3>
                                <div className="relative w-full h-6 bg-gray-300 rounded-full">
                                    <div
                                        className={`absolute left-0 top-0 h-full rounded-full ${getSkillLevelClass(competence.niveau)}`}
                                        style={{ width: getSkillLevelWidth(competence.niveau) }}
                                    ></div>
                                </div>
                                <p className="mt-2">Niveau: {competence.niveau}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
