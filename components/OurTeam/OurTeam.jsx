import React from "react";
import Team from "./Team";
import styles from "./OurTeam.module.css";

const teamMembers = [
    {
      name: "Karan Singh Rathore",
      role: "Team Leader",
      description: "As the team leader, Karan guides the team in each and every step of the project. His expertise and vision drive the project forward.",
      image: "/member1.jpeg",
    },
    {
      name: "Anmol Sharma",
      role: "Frontend Developer",
      description: "Anmol is a creative frontend developer. His attention to detail and innovative approach enhance the user experience.",
      image: "/member2.jpeg",
    },
    {
      name: "Arnim Gautam",
      role: "Web Developer and coordinator",
      description: "Arnim supports the frontend development team by assisting Anmol and contributing to the team's collaborative efforts.",
      image: "/member3.jpeg",
    },
    {
      name: "Bhavishaya  Khandelwal",
      role: "API Expert",
      description: "Bhavishya is an API expert who sets up the essential connections for the website.and also helps in team total efforts.",
      image: "/member4.jpeg",
    },
    {
      name: "Karan Basandani",
      role: "Backend Developer",
      description: "Karan specializes in backend development, bringing the technical backbone of the project to life.",
      image: "/member5.jpeg",
    },
    {
      name: "Vidhita Sharma",
      role: "Project Coordinator",
      description: "Vidhita manages project coordination .She excels in organization, communication, and presentation.",
      image: "/member7.jpeg",
    },
  ];

const OurTeam = () => {
  return (
    <div className={styles.teamContainer}>
      <h1>Meet Our Team</h1>
      <div className={styles.members}>
        {teamMembers.map((member, index) => (
          <div className={styles.memberBox} key={index}>
            <Team
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
