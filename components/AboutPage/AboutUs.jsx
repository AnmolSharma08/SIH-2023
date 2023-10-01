import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.heading}>Be your own guide</h1>
      <div className={styles.contentContainer}>
        <div className={styles.carouselContainer}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img src="/about1.jpg" alt="About 1" />
            </div>
            <div>
              <img src="/about2.jpg" alt="About 2" />
            </div>
            <div>
              <img src="/about3.jpg" alt="About 3" />
            </div>
            <div>
              <img src="/about4.jpg" alt="About 4" />
            </div>
            <div>
              <img src="/about5.jpg" alt="About 5" />
            </div>
          </Carousel>
        </div>
        <div className={styles.aboutText}>
          <p>
          At <spna>INDIA's WONDERS</spna>, our vision is to provide travelers with an immersive and hassle-free experience when exploring the beautiful destinations of India. Our website is designed to simplify your journey in several ways. By entering your location, you can instantly discover nearby tourist attractions, affordable cab services, delightful restaurants, and cozy cafes—all curated to enhance your travel experience. With us, you can not only explore these hidden gems but also book your tickets for a seamless visit to your chosen tourist spots. Our goal is to make your journey through India an unforgettable adventure filled with incredible sights and authentic local experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
