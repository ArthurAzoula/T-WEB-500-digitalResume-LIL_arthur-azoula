import React, { useState } from "react";

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-black-raisin text-champagne p-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold underline">My Portfolio</h1>
                <button
                    className="lg:hidden"
                    onClick={toggleNav}
                >
                </button>
                <nav className={`lg:flex ${isNavOpen ? "block" : "hidden"}`}>
                    <ul className="lg:flex space-x-6 bg-chamoisee p-4 rounded-md">
                        <li>
                            <a href="#about" className="hover:text-black-raisin hover:underline">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className=" hover:text-black-raisin hover:underline">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#education" className=" hover:text-black-raisin hover:underline">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className=" hover:text-black-raisin hover:underline">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className=" hover:text-black-raisin hover:underline">
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
