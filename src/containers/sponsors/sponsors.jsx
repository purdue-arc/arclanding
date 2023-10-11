import React from "react";
import "./sponsors.css"; // Make sure to link your CSS file
{/* import sponsorImage1 from "../../assets/sponsor1.png"; // Import your sponsor images
import sponsorImage2 from "../../assets/sponsor2.png"; // Import your sponsor images */}
// Import other sponsor images as needed

const Sponsors = () => {
    const sponsorData = [
        { name: "Sponsor 1", //image: sponsorImage1
        },
        { name: "Sponsor 2", //image: sponsorImage2
        },
        // Add more sponsors with their images here
    ];

    return (
        <div className="sponsors__container">
            {sponsorData.map((sponsor, index) => (
                <div className="sponsor" key={index}>
                    <div className="sponsor-image">
                        <img src={sponsor.image} alt={sponsor.name} />
                    </div>
                    <div className="sponsor-name">{sponsor.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
