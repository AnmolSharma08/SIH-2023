import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./NavBar.module.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div
          className={`${styles.logo} ${isMobileMenuOpen ? styles.logoCentered : ""}`}
          style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
        >
          India's Wonders
        </div>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact US</a>
        </div>

        <div
          className={`${styles.mobileIcon} ${isMobileMenuOpen ? styles.closeIcon : ""}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;