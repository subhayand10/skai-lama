"use client";
import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { useMyContext } from "@/app/context/MyContext";

export default function Modal() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const { setOpen, setModalData } = useMyContext();
  const handleClose = () => {
    setOpen(false);
  };
  const handleProjectCreation = () => {
    if (!text) return;
    if (textLength > 15) return;
    setModalData((item) => [...item, text]);
    setOpen(false);
  };
  useEffect(() => {
    setTextLength(text.length);
  }, [text]);
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
          onChange={(e) => {
            setText(e.target.value);
          }}
          id="project-name"
          placeholder="Type here"
          className={`${styles.input} dark`}
          required
        />
        {!text && (
          <p className={styles["error-text"]}>
            Project Name Can&apos;t be empty
          </p>
        )}
        {textLength > 15 && (
          <p className={styles["error-text"]}>
            Project Name Can&apos;t be more than 15 characters
          </p>
        )}
        <div className={styles["button-group"]}>
          <button onClick={handleClose} className={styles["cancel-button"]}>
            Cancel
          </button>
          <button
            onClick={handleProjectCreation}
            className={`bg-[#7c3aed]  text-[#ffffff] px-4 py-2 rounded-md ${
              (!text || textLength > 15) && "opacity-10"
            } `}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
