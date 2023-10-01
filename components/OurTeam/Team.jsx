import React from "react";
import styles from "./Team.module.css";

const Team = ({ name, role, description, image }) => {
  return (
    <div className={styles.member}>
      <img src={image} alt={name} className={styles.memberImage} />
      <h2 className={styles.memberName}>{name}</h2>
      <p className={styles.memberRole}>{role}</p>
      <p className={styles.memberDescription}>{description}</p>
    </div>
  );
};

export default Team;
