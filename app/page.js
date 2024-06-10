"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./Home/page";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Upload from "./Upload/page";



export default function Home() {
  return (
    <>
    <LandingPage />
    </>

  );
}
