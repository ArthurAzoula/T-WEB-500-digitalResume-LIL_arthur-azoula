import React, { useState } from 'react';
import data from '../data/educations.json';

function Education() {
    const [sortedEducations, setSortedEducations] = useState(data.educations);

    const sortByDate = () => {
        const sorted = [...sortedEducations].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
        setSortedEducations(sorted);
    };

    return (
        <div>
            <h1>Education</h1>
            <button onClick={sortByDate}>Trier par date</button>
            <ul>
                {sortedEducations.map((education) => (
                    <li key={education.id}>
                        <h2>{education.degree}</h2>
                        <p>{education.school}</p>
                        <p>{education.location}</p>
                        <p>{education.date}</p>
                        <p>{education.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Education;
