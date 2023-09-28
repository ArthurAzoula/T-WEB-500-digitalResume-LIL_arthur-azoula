import React, { useState } from "react";


const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-dark text-light p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Mon Portfolio</h1>
                <button
                    className="lg:hidden"
                    onClick={toggleNav}
                >
                   
                </button>
                <nav className={`lg:flex ${isNavOpen ? "block" : "hidden"}`}>
                    <ul className="lg:flex space-x-4">
                        <li>
                            <a href="#about">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                Expérience
                            </a>
                        </li>
                        {/* ... Ajoutez d'autres liens ici */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
