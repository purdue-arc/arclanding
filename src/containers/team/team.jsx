import React from "react";
import "./team.css";

const Team = () => {
    const teamMembers = [
        { role: "President", name: "Haddy Alchaer", division: "Executive Board" },
        { role: "Vice President", name: "Revanth Senthilkumaran", division: "Executive Board" },
        { role: "Operations Director", name: "Mouli Sangita", division: "Executive Board" },
        { role: "Treasurer", name: "Aytaj Aslanli", division: "Executive Board" },
        { role: "Project Lead", name: "Revanth Senthilkumaran", division: "Project Leads" },
        { role: "Project Lead", name: "Guna Avula", division: "Project Leads" },
        { role: "Project Lead", name: "Ryan Ting", division: "Project Leads" },
        { role: "Project Lead", name: "Campbell McClendon", division: "Project Leads" },
        { role: "Project Lead", name: "Sam Graham", division: "Project Leads" },
        { role: "Project Lead", name: "Aarav Garg", division: "Project Leads" },
        { role: "Operations Lead", name: "Nithin Anand", division: "Operations Leads" },
        { role: "Operations Lead", name: "Edgar Babajanyan", division: "Operations Leads" },
        { role: "Operations Lead", name: "Nikhil Irukula", division: "Operations Leads" },
        { role: "Operations Lead", name: "Yashvi Agrawal", division: "Operations Leads" },
        { role: "Operations Lead", name: "Pranav Krishnamoorthy", division: "Operations Leads" },
        { role: "RISE Lead", name: "Vijay Muthukumar", division: "RISE Lead" },
    ];

    return (
        <div className="team__container">
            {teamMembers.map((member, index) => (
                <div className="team__member" key={index}>
                    <div className="team__member-image">
                        {/* Add your image source here */}
                        <img src={`image${index + 1}.jpg`} alt={member.name} />
                    </div>
                    <div className="team__member-name">{member.name}</div>
                    <div className="team__member-role">{member.role}</div>
                </div>
            ))}
        </div>
    );
};

export default Team;
