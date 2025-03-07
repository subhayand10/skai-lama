"use client";
import React from "react";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

export default function ProjectCard({ title, setCurrentProjectTitle, logoT }) {
  return (
    <Link href={{ pathname: "Upload", query: { title } }}>
      <div
        className={`${styles.card} dark hover:opacity-50 transition-all duration-200 ease-in-out`}
        onClick={() => {
          setCurrentProjectTitle(title);
        }}
      >
        <div className={styles["card-content"]}>
          <div className={styles["icon-wrapper"]}>
            <div className={styles.icon}>
              <span>{logoT}</span>
            </div>
          </div>
          <div className={styles["text-wrapper"]}>
            <div className={`${styles.title} dark`}>{title}</div>
            {/* <div className={`${styles.subtitle} dark`}>4 Episodes</div>
            <div className={`${styles.description} dark`}>
              Last edited a week ago
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
