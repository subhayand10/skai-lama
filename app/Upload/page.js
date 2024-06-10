"use client";
import React, { useState } from "react";
import styles from "./Upload.module.css";
import SideBar from "../components/SideBar/SideBar";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import UploadCard from "../components/UploadCard/UploadCard";
import DragDrop from "../components/DragDrop/DragDrop";
import UploadModal from "../components/UploadModal/UploadModal";
import Table from "../components/table/table";
import TryOut from "../components/TryOut/TryOut";
import { useMyContext } from "../context/MyContext";

const Upload = () => {
  const {dragClicked}=useMyContext();
  return (
    <>
      {dragClicked ? (
        <UploadModal />
      ) : (
        <div className={styles.mainContainer}>
          <SideBar />
          <div>
            <UploadHeader />
            <h1>Upload</h1>
            <div className={styles.cardContainer}>
              <UploadCard />
              <UploadCard />
              <UploadCard />
            </div>
            <p className={styles.or}>or</p>
            <DragDrop  />
            <TryOut/>
            <Table/>
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
