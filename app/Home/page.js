"use client";
import React, { useEffect, useState,useLayoutEffect } from "react";
import styles from "./LandingPage.module.css";
import Modal from "../components/Modal/Modal";
import { useMyContext } from "../context/MyContext";
import ProjectCard from "../components/ProjectCard/page";
import Navbar from "../components/Navbar/page";
import Image from "next/image";
import hero_image from "../../public/hero_image.png"
//import add_icon from "../../public/add.png";
import add_icon from "../../public/plus.png";

const projectData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function LandingPage() {
  const { open, setOpen, modalData, backToHome, setBackToHome, setCurrentProjectTitle,setModalData } = useMyContext();
  const [projects, setProjects] = useState(false)
  const handleOpen = () => {
    setOpen(true);
    setBackToHome(false)
  };

  useEffect(() => {
    localStorage.setItem("modalData", JSON.stringify(modalData))
  }, [modalData]);


  const logoText = (text) => {
    const arr = text.split(/[\s-_]+/)
    let result=""
    arr.forEach((item) => {
      result += item[0]
    })
    return result
  }

  return (
    <>
      {open ? (
        <Modal />
      ) : (
        <div className={`${styles.container} dark w-[90%] mx-auto`}>
          <div className={`${styles.card} dark`}>
            <Navbar />
            {modalData.length > 0 && !backToHome ? (
              <>
                <div className={styles.headerContainer}>
                  <h1 className={styles.headerTitle}>Projects</h1>
                  <button
                    className={`${styles.headerButton} hover:opacity-50 transition-all duration-200 ease-in-out`}
                    onClick={handleOpen}
                  >
                    <span className={styles.headerButtonIcon}>+</span> Create
                    New Project
                  </button>
                </div>
                <div className={styles.gridContainer}>
                  {modalData.map((item, index) => {
                    const logoT = logoText(item);
                    return (
                      <div key={index} className={styles.gridItem}>
                        <ProjectCard
                          logoT={logoT}
                          title={item}
                          setCurrentProjectTitle={setCurrentProjectTitle}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className={styles["text-center"]}>
                <h1 className={`${styles.title} dark`}>Create a New Project</h1>
                <div className="w-[100%] flex justify-center max-460:items-end max-460:gap-2 max-sm:mt-[10%] max-sm:mb-[8%] max-460:mb-[20%]">
                  <div className="lg:w-[30%]  w-[40%] max-460:mt-[10%]">
                    <Image
                      src={hero_image}
                      alt="hero image"
                      className="mx-auto "
                    />
                  </div>
                </div>
                <p className={`${styles.text} dark `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in
                </p>
                <button
                  className={`${styles.button}  dark hover:opacity-50 transition-all duration-200 ease-in-out`}
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

