import React from "react";
import styles from "./UploadCard.module.css"

export default function UploadCard() {
  return (
    <div className={`${styles.container} dark`}>
      <div className={styles.header}>
        <img
          className={styles.icon}
          src="https://placehold.co/48x48?text=RSS"
          alt="RSS Feed Icon"
        />
        <div className={styles.textContainer}>
          <div className={`${styles.text} dark`}>Upload from RSS Feed</div>
        </div>
      </div>
    </div>
  );
}
