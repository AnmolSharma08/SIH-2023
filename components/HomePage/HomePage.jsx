// components/HomePage.js
import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/HOME.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.heading}>Discover India's Hidden Gems</h1>
        <p className={styles.description}>
          Explore the breathtaking beauty, rich culture, and diverse landscapes of India with India Unveiled Journeys.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.searchButton}>Search Your Location</button>
          <button className={styles.enterButton}>Enter Your Location</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;