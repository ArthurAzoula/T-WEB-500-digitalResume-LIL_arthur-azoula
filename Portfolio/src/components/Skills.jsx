import React from "react";
import data from "../data/competences.json"; // Importez vos données depuis le fichier JSON

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            <div className="skills-list">
                {data.competences.map((competence) => (
                    <div key={competence.id}>
                        <h2>{competence.nom}</h2>
                        <p>Niveau: {competence.niveau}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
