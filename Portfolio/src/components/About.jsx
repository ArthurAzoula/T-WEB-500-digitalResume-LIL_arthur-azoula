import React from "react";
import Quote from "./Quote";
import gifDevelopper from "../assets/images/coding.gif";
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
        <div className="text-champagne bg-chamoisee p-8 m-12 rounded-md shadow-md">
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
                    <h1 className="text-6xl font-bold mb-4">
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
                    <p className="text-justify">

                        Hello everyone! My name is Arthur, and I've always been fascinated by technology. I'm a true enthusiast (especially when it comes to video games)!

                        It's for these various reasons that I chose to study computer science at the IUT of Reims from 2020 to 2022, where I discovered my love for coding. It was a bit like falling in love, but with fewer flowers and more caffeine. After two years of adventures, projects, and even an internship, I earned my DUT (University Technology Diploma)! But it was still too early to stop on such a good path.

                        That's why I continued my studies at the University of Lille in the 3rd year of Computer Science. I learned a lot and was exposed to technologies I had never seen before. But I embraced the challenge and kept progressing. Additionally, I had the opportunity to complete a second internship at a company.

                        All these experiences at school (projects, internships, etc.) have inspired me to deepen my knowledge of computer science in the professional world. With immense pride, I embark on a new adventure at Epitech for the next three years in an apprenticeship program!

                        Outside of the world of computers, I enjoy spending time with my friends, playing video games, and exploring the world. But don't get me wrong; I'm just as serious about my professional projects as I am about my video game sessions. I'm determined to become an expert in my field and make a difference in the world.
                    </p>
                    <div></div>
                </div>
                <div className="mt-12">
                    <Quote
                        citation="Innovation distinguishes between a leader and a follower."
                        auteur="Steve Jobs"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default About;
