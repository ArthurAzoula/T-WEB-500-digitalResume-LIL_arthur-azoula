import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Check from "../icons/Mail";
import 'daisyui/dist/full.css'

const Contact = () => {

    const [isToastVisible, setToastVisble] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoie des données
        console.log("Formulaire soumis avec les données :", formData);
        // Mettre le toast visble
        setToastVisble(true);
        // Faire disparaître le toast 
        setTimeout(() => {
            setToastVisble(false);
        }, 5000)

    };

    return (
        <section id="contact" className="bg-chamoisee text-champagne p-8 m-12 rounded-md shadow-md">
            <SectionTitle title={"Contact"} />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold mb-2">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-champagne bg-white text-black rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-semibold mb-2">
                        Adresse e-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-black border border-champagne bg-white rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-2 text-black border round border-champagne bg-white"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-black-raisin text-soft-mint-green py-2 px-4 rounded-lg hover:bg-dark-gray"
                >
                    Envoyer
                </button>
                {isToastVisible && (
                    <div className="toast toast-bottom toast-end">
                        <div className="alert alert-success">
                            <div className="flex">
                                <Check />
                                <span className="text-bold font-sans ml-2">Mail envoyé avec succès.</span>
                            </div>
                        </div>
                    </div>
                )}


                
            </form>
        </section>
    );
};

export default Contact;
