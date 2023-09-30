import React, { useState } from 'react';
import data from '../data/educations.json';
import House from '../icons/House';
import Location from '../icons/Location';
import Calendar from '../icons/Calendar';
import Description from '../icons/Description';
import SectionTitle from './SectionTitle';

function Education() {

    return (
        <section id='education' className="bg-chamoisee text-champagne p-8 m-12 rounded-md shadow-md">
            <SectionTitle title={"Mon parcours scolaire"} />
            <div className='flex items-center justify-center'>
            </div>

            <ul className="space-y-4">
                {data.educations.map((education, index) => (
                    <li
                        key={education.id}
                        className={`p-4 rounded-md shadow-md transform transition-transform hover:scale-90 duration-300 ease-in-out ${index % 2 === 0 ? 'translate-x-4 bg-bole' : '-translate-x-4 bg-champagne text-chamoisee'
                            }`}
                    >

                        <h2 className="text-xl font-semibold">{education.degree}</h2>

                        <div className='flex items-center'>
                            <House className="text-soft-mint-green w-6 h-6 mr-2" />
                            <p className="text-light-sky-marron ml-2">{education.school}</p>
                        </div>
                        <div className='flex item-center'>
                            <Location className="text-soft-mint-green w-6 h-6 mr-2" />
                            <p className="text-light-sky-marron ml-2">{education.location}</p>
                        </div>
                        <div className='flex item-center'>
                            <Calendar className="text-soft-mint-green w-6 h-6 mr-2" />
                            <p className="text-light-sky-marron ml-2">{education.date}</p>
                        </div>
                        <div className='flex item-center'>
                            <Description className="text-soft-mint-green w-6 h-6 mr-2" />
                            <p className="text-light-sky-marron ml-2">{education.description}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Education;
