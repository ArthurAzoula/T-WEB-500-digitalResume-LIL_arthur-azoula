import React from "react";
import "../styles/SpaceArrow.css";

const SpaceArrow = () => {
    return (
        <div className="space-arrow flex flex-col items-center">
            <div className="vertical-bars space-y-1  customBounce">
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
            </div>
            <div className="down-arrow customBounce">
                <p className="text-3xl">&#8964;</p>
            </div>
        </div>
    );
};

export default SpaceArrow;
