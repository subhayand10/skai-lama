import React from "react";
import styles from "./SideBar.module.css";
import logo from "../../../public/logo.png"
import settings from "../../../public/settings_small.png";
import Image from "next/image";
import { useMyContext } from "@/app/context/MyContext";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import AnimatedSideBar from "../AnimatedSideBar/AnimatedSideBar";
import {
  useWindowWidth,
} from "@react-hook/window-size";


export default function SideBar({ paymentsPageSize }) {
  const { menuItemIndex, currentProjectTitle, openSideBar, setOpenSideBar } =
    useMyContext();
  return (
    <AnimatedSideBar width={useWindowWidth()}  >
      <div
        className={`flex flex-col  p-4 h-screen max-md:h-[100%] dark:bg-[#44337a] bg-[#faf5ff] 
        ${!openSideBar && "max-md:hidden"} ${paymentsPageSize && "h-[125%]"}  `}
      >
        <div className={styles.header}>
          <Link href="Home">
            <div className="flex justify-center items-center hover:cursor-pointer">
              <Image src={logo} alt="logo" />
              <span className={styles.title}>Post.AI</span>
            </div>
          </Link>
          <div
            className={`${
              !openSideBar && "md:hidden"
            } cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out`}
            onClick={() => {
              setOpenSideBar(false);
            }}
          >
            <IoMdClose className="text-[#d6bcfa]" />
          </div>
        </div>
        <div className={styles.subtitle}>
          <h2>Podcast Upload Flow</h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles["nav-item"]}>
              <Link
                href={{
                  pathname: "Upload",
                  query: { title: currentProjectTitle },
                }}
                className={`${styles["nav-link"]} ${
                  menuItemIndex != 0 && styles.inactive
                }`}
              >
                <span className={styles["nav-icon"]}>1</span>
                Extract
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link
                href={{
                  pathname: "Edit",
                  query: { title: currentProjectTitle },
                }}
                className={`${styles["nav-link"]} ${
                  menuItemIndex != 1 && styles.inactive
                }`}
              >
                <span className={styles["nav-icon"]}>2</span>
                Edit Transcript
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link
                href={{
                  pathname: "Config",
                  query: { title: currentProjectTitle },
                }}
                className={`${styles["nav-link"]} ${
                  menuItemIndex != 2 && styles.inactive
                }`}
              >
                <span className={styles["nav-icon"]}>3</span>
                Configuration
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link
                href={{
                  pathname: "Payment",
                  query: { title: currentProjectTitle },
                }}
                className={`${styles["nav-link"]} ${
                  menuItemIndex != 3 && styles.inactive
                }`}
              >
                <span className={styles["nav-icon"]}>4</span>
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footer}>
          <hr />
          <div className="flex gap-2 items-center">
            <Image
              src={settings}
              alt="settings"
              className="hover:opacity-50 transition-all duration-200 ease-in-out cursor-pointer"
            />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </AnimatedSideBar>
  );
}
