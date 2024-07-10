"use client";
import React, { useEffect } from "react";
import styles from "./DragDrop.module.css";
import { useMyContext} from "@/app/context/MyContext";
import upload_icon from "../../../public/upload_icon.png"
import Image from "next/image";


export default function DragDrop() {
 const {setDragClicked}= useMyContext()


  return (
    <div
      className={styles.container}
      onClick={() => {
        setDragClicked(true);
      }}
    >
      <div className={styles.iconContainer}>
        <Image src={upload_icon} alt="upload_icon" />
      </div>
      <p className={`${styles.textPrimary} dark w-[100%]`}>
        Select a file or drag and drop here (Podcast Media or Transcription
        Text)
      </p>
      <p className={`${styles.textSecondary} dark w-[100%]`}>
        MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
      </p>
      <button className={styles.button}>Select File</button>
    </div>
  );
}
