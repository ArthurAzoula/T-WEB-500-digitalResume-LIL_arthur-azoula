import React from "react";
import Quote from "./Quote";
import gifDevelopper from "../assets/images/developper.gif";

const About = () => {
    return (
        <div className="text-champagne bg-chamoisee p-8 m-12 rounded-md shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-6xl font-bold mb-4">
                    FullStack <span className="text-soft-mint-green">Developer</span>
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-light-sky-marron mb-4">  
                        <a
                            className="underline"
                            href="https://www.epitech.eu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Epitech
                        </a>
                        Lille
                    </p>
                    <img  className="mx-auto" src={gifDevelopper} alt="Developer GIF" />
                </div>
            </div>
            <div className="mt-12">
                <Quote
                    citation="Innovation distinguishes between a leader and a follower."
                    auteur="Steve Jobs"
                />
            </div>
        </div>
    );
};

export default About;
