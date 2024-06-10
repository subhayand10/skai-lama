"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Modal from "../components/Modal/Modal";
import { useMyContext } from "../context/MyContext";
import ProjectCard from "../components/ProjectCard/page";
import Navbar from "../components/Navbar/page";
import ProjectsPage from "../Projects/page";
import Image from "next/image";
import hero_image from "../../public/hero_image.png"
import add_icon from "../../public/add.png";

const projectData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function LandingPage() {
  const { open, setOpen, modalData,backToHome,setBackToHome } = useMyContext();
  const [projects,setProjects] = useState(false)
  const handleOpen = () => {
    setOpen(true);
    setBackToHome(false)
  };

  useEffect(()=>{
    localStorage.setItem("modalData", JSON.stringify(modalData))
  },[modalData]);

  return (
    <>
      {open ? (
        <Modal />
      ) : (
        <div className={`${styles.container} dark`}>
          <div className={`${styles.card} dark`}>
            <Navbar />
            {modalData.length > 0 && !backToHome ? (
              <>
                <div className={styles.headerContainer}>
                  <h1 className={styles.headerTitle}>Projects</h1>
                  <button className={styles.headerButton}>
                    <span className={styles.headerButtonIcon}>+</span> Create
                    New Project
                  </button>
                </div>
                <div className={styles.gridContainer}>
                  {modalData.map((item, index) => (
                    <div key={index} className={styles.gridItem}>
                      <ProjectCard title={item} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className={styles["text-center"]}>
                <h1 className={`${styles.title} dark`}>Create a New Project</h1>
                <Image src={hero_image} alt="hero image" />
                <p className={`${styles.text} dark`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in.
                </p>
                <button
                  className={`${styles.button} dark`}
                  onClick={handleOpen}
                >
                  <Image src={add_icon} alt="plus icon" />
                  <span>Create New Project</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
