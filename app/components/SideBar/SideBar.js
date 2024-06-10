import React from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://placehold.co/40x40"
          alt="Logo"
          className={styles.logo}
        />
        <span className={styles.title}>LAMA.</span>
      </div>
      <div className={styles.subtitle}>
        <h2>Podcast Upload Flow</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles["nav-item"]}>
            <a href="#" className={`${styles["nav-link"]}`}>
              <span className={styles["nav-icon"]}>1</span>
              Projects
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={`${styles["nav-link"]} ${styles.inactive}`}>
              <span className={styles["nav-icon"]}>2</span>
              Widget Configurations
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={`${styles["nav-link"]} ${styles.inactive}`}>
              <span className={styles["nav-icon"]}>3</span>
              Deployment
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#" className={`${styles["nav-link"]} ${styles.inactive}`}>
              <span className={styles["nav-icon"]}>4</span>
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <hr />
        <a href="#" className={styles["footer-link"]}>
          <img src="https://placehold.co/24x24" alt="Settings" />
          Settings
        </a>
      </div>
    </div>
  );
}
