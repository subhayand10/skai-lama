import React from "react";
import styles from "./UploadHeader.module.css";

export default function UploadHeader() {
  return (
    <div className={`${styles.container} dark`}>
      <div className={`${styles.flexItemsCenter} ${styles.spaceX2}`}>
        <img
          src="https://placehold.co/20x20"
          alt="home"
          className={`${styles.imgSmall} ${styles.textPurple600}`}
        />
        <span className={styles.textZinc600}>/ Sample Project /</span>
        <a href="#" className={styles.textPurple600}>
          Upload
        </a>
      </div>
      <div className={`${styles.flexItemsCenter} ${styles.spaceX4}`}>
        <div className={`${styles.flexItemsCenter} ${styles.spaceX1}`}>
          <img
            src="https://placehold.co/10x10"
            alt="dropdown"
            className={styles.imgSmaller}
          />
          <span className={styles.textZinc600}>EN</span>
          <img
            src="https://placehold.co/20x20"
            alt="flag"
            className={`${styles.imgSmall} ${styles.imgRound}`}
          />
        </div>
        <img
          src="https://placehold.co/20x20"
          alt="notification"
          className={styles.imgSmall}
        />
      </div>
    </div>
  );
}
