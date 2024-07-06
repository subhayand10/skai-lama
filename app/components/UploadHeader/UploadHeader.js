import React from "react";
import styles from "./UploadHeader.module.css";
import home from "../../../public/home.png"
import noti from "../../../public/notifications.png";
import country from "../../../public/country.png";
import dropdown_icon from "../../../public/dropdown_icon.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function UploadHeader({section,title}) {
  return (
    <div className={`${styles.container} dark`}>
      <div className="flex items-center">
        <div className="md:hidden mr-1 w-[30px] h-[30px] text-[#4b5563]">
          <RxHamburgerMenu className="w-[100%] h-[100%] " />
        </div>
        <Image src={home} alt="home" />
        <span className="mx-2 text-[#4b5563]">{`/ ${title} /`}</span>
        <a href="#" className={styles.textPurple600}>
          {section}
        </a>
      </div>
      <div className="flex items-center ">
        <div className="flex items-center">
          <Image src={dropdown_icon} alt="dropdown_icon" />
          <span className="w-[48px] text-[#d1d5db]">EN</span>
          <div className="w-[60px] h-[60px]">
            <Image src={country} alt="country" />
          </div>
        </div>
        <div className="w-[64px] h-[64px]">
          <Image src={noti} alt="notifications" />
        </div>
      </div>
    </div>
  );
}
