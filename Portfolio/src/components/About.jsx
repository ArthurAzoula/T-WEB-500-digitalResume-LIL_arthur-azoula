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
