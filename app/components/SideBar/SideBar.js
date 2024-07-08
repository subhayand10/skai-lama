import React from "react";
import styles from "./SideBar.module.css";
import logo from "../../../public/logo.png"
import settings from "../../../public/settings_small.png";
import Image from "next/image";
import { useMyContext } from "@/app/context/MyContext";
import Link from "next/link";

// import { usePathname } from "next/navigation";

export default function SideBar({upload,queryParams}) {
  const{menuItemIndex}=useMyContext()
  //  const pathname = usePathname();
  // console.log(pathname)
  return (
    <div className="flex flex-col p-4 h-screen dark:bg-[#44337a] bg-[#faf5ff] max-md:hidden ">
      <div className={styles.header}>
        <Image src={logo} alt="logo" />
        <span className={styles.title}>LAMA.</span>
      </div>
      <div className={styles.subtitle}>
        <h2>Podcast Upload Flow</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles["nav-item"]}>
            <Link
              href={{ pathname: "Upload", query: { title:queryParams } }}
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
              href="Edit"
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
              href="Config"
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
              href="Payment"
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
          <Image src={settings} alt="settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
