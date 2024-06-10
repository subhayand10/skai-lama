import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useMyContext } from "@/app/context/MyContext";

export default function Modal() {
  const [text,setText]=useState("")
  const { setOpen, setModalData } = useMyContext();
  const handleClose = () => {
    setOpen(false);
  };
  const handleProjectCreation = () => {
    setModalData((item)=>[...item,text])
    setOpen(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} dark`}>
        <h2 className={styles.title}>Create Project</h2>
        <label htmlFor="project-name" className={`${styles.label} dark`}>
          Enter Project Name:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          id="project-name"
          placeholder="Type here"
          className={`${styles.input} dark`}
        />
        <p className={styles["error-text"]}>Project Name Can't be empty</p>
        <div className={styles["button-group"]}>
          <button onClick={handleClose} className={styles["cancel-button"]}>Cancel</button>
          <button onClick={handleProjectCreation} className={styles["create-button"]}>Create</button>
        </div>
      </div>
    </div>
  );
}
