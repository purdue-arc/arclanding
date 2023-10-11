import React from "react";
import "./sponsors.css";
import sponsorImage from "../../assets/sponsor.png";

const Sponsors = () => {
    return (
        <div className="sponsor">
            <div className="sponsor-image">
                <img src={sponsorImage} alt="sponsor" />
            </div>
            <div className="sponsor-content">
                <h2>Sponsor Name</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    scelerisque, orci in ultrices lacinia, purus sapien.
                </p>
            </div>
        </div>
    );
};

export default Sponsors;
