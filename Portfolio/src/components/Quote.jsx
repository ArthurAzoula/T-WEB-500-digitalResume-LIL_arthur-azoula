import React from "react";

const Quote = ({ citation, auteur }) => {
    return (
        <div className="relative bg-bole text-champagne p-6 rounded-lg shadow-md">
            <div className="absolute top-0 left-0 -ml-4 mt-4 w-0 h-0 border-t-4 border-l-4 border-solid border-light-marron"></div>
            <div className="absolute bottom-0 right-0 -mr-4 mb-4 w-0 h-0 border-b-4 border-r-4 border-solid border-light-marron"></div>
            <blockquote className="text-2xl italic text-center relative z-10">
                &ldquo;{citation}&rdquo;
            </blockquote>
            <p className="text-right mt-4 text-light-sky-marron">&ndash; {auteur}</p>
        </div>
    );
};

export default Quote;
