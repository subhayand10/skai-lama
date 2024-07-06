import React from "react";
import styles from "./UploadCard.module.css"
import Image from "next/image";

export default function UploadCard({img,alt}) {
  return (
    <div className={`${styles.container} dark w-[250px] h-[139px] flex items-center`}>
      <div className={styles.header}>
 <Image  src={img} alt={alt}/>
        <div className={styles.textContainer}>
          <div className={`${styles.text} dark`}>Upload from {alt}</div>
        </div>
      </div>
    </div>
  );
}
