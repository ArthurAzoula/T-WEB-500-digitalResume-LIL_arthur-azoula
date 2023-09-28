import React from "react";
import CodingSvg from "../icons/Code"; // Remplacez par le chemin de votre fichier SVG de codage
import WorldSvg from "../icons/World"; // Remplacez par le chemin de votre fichier SVG de monde

const About = () => {
    return (
        <div className="bg-chamoisee text-champagne p-6 m-12 rounded-lg">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
                <div className="flex flex-col lg:flex-row mb-8">
                    <div className="lg:w-1/2 mr-6">
                        <p className="text-lg mb-4">
                            Salut à tous ! Je suis Arthur, un jeune étudiant en informatique passionné par la technologie.
                        </p>
                        <p className="text-lg">
                            J'ai toujours été fasciné par le monde de l'informatique, et ma véritable passion se révèle (surtout dans les jeux vidéo) !
                        </p>
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        {/* SVG d'un personnage qui code */}
                        <div className="w-32 h-32 mx-auto lg:mx-0">
                            <CodingSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
