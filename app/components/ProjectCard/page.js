import React from "react";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

export default function ProjectCard({title}) {
  return (
    <Link href="Upload">
      <div className={`${styles.card} dark`}>
        <div className={styles["card-content"]}>
          <div className={styles["icon-wrapper"]}>
            <div className={styles.icon}>
              <span>SP</span>
            </div>
          </div>
          <div className={styles["text-wrapper"]}>
            <div className={`${styles.title} dark`}>{title}</div>
            <div className={`${styles.subtitle} dark`}>4 Episodes</div>
            <div className={`${styles.description} dark`}>
              Last edited a week ago
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
