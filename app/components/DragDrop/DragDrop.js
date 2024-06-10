import React, { useEffect } from "react";
import styles from "./DragDrop.module.css";
import { useMyContext} from "@/app/context/MyContext";


export default function DragDrop() {
 const {setDragClicked}= useMyContext()


  return (
    <div className={styles.container} onClick={()=>{setDragClicked(true)}}>
      <div className={styles.iconContainer}>
        <img
          alt="upload icon"
          src="https://placehold.co/40x40?text=+"
          className={styles.icon}
        />
      </div>
      <p className={`${styles.textPrimary} dark`}>
        Select a file or drag and drop here (Podcast Media or Transcription
        Text)
      </p>
      <p className={`${styles.textSecondary} dark`}>
        MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
      </p>
      <button className={styles.button}>Select File</button>
    </div>
  );
}
