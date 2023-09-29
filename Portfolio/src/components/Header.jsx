import React, { useState, useEffect } from "react";
import profileImage from "../assets/images/me.png";
import School from "../icons/School";
import User from "../icons/User";
import Experience from "../icons/Experience";
import Contact from "../icons/Contact";
import Skills from "../icons/Skills"

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [animatedTitle, setAnimatedTitle] = useState("");
    const titleText = "Arthur's Portfolio...";

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const titleTimeout = setTimeout(() => {
            setShowTitle(true);
        }, 10000);

        return () => clearTimeout(titleTimeout);
    }, []);

    useEffect(() => {
        let currentChar = 0;
        let animationInterval;

        const animateTitle = () => {
            if (currentChar <= titleText.length) {
                setAnimatedTitle(titleText.slice(0, currentChar));
                currentChar++;
            } else {
                currentChar = 0;
                setAnimatedTitle("");
            }
        };

        if (showTitle) {
            animationInterval = setInterval(animateTitle, 400); // Délai entre chaque caractère (en millisecondes)
        }

        return () => {
            clearInterval(animationInterval);
        };
    }, [showTitle]);

    return (
        <header className="bg-dark-purple text-champagne p-6 border-b-4 border-solid border-chamoisee">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={profileImage} alt="Your Profile" className="w-20 h-20 p-2 bg-chamoisee rounded-full" />
                    {showTitle ? (
                        <h1 className="text-2xl font-semibold animate-title-in p-2 capitalize font-mono">
                            {animatedTitle}
                        </h1>
                    ) : null}
                </div>
                <button className="lg:hidden" onClick={toggleNav}></button>
                <nav className={`lg:flex ${isNavOpen ? "blockArthur's" : "hidden"} transition-all duration-300`}>
                    <ul className="lg:flex space-x-6 bg-chamoisee p-4 rounded-md">
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <User className="w-5 h-5 mr-2" />Arthur's
                            <a href="#about" className=" ml-2">
                                 About me
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Experience className="w-5 h-5" />
                            <a href="#experience" className="ml-2">
                                 Experience
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <School className="w-5 h-5 mr-2" />
                            <a href="#education" className="  ml-2">
                                 Education
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Skills className="w-5 h-5 mr-2" />
                            <a href="#skills" className="  ml-2">
                                 Skills
                            </a>
                        </li>
                        <li className="flex items-center hover:text-black-raisin hover:underline">
                            <Contact className="w-5 h-5 mr-2" />
                            <a href="#contact" className="  ml-2">
                                 Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
