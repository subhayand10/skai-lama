"use client";
import React from "react";
import styles from "./UploadHeader.module.css";
import home from "../../../public/home.png";
import noti from "../../../public/notifications.png";
import avatar_user from "../../../public/logout.png";
import dropdown_icon from "../../../public/dropdown_icon.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenuRadioGroupDemo } from "../DropDown/DropDown";
import { useMyContext } from "@/app/context/MyContext";
import Link from "next/link";

export default function UploadHeader({ section, title }) {
  const { setOpenSideBar, openSideBar } = useMyContext();
  return (
    <div className={`${styles.container} dark`}>
      <div className="flex items-center">
        <div
          className={`${
            openSideBar && "hidden"
          } md:hidden mr-1 w-[30px] h-[30px] text-[#4b5563] cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out`}
        >
          <RxHamburgerMenu
            className="w-[100%] h-[100%] "
            onClick={() => {
              setOpenSideBar(true);
            }}
          />
        </div>
        <Link href="Home">
          <Image
            src={home}
            alt="home"
            className="h-[100%] mx-auto hover:cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out"
          />
        </Link>
        <span className="mx-2 text-[#4b5563]">{`/ ${title} /`}</span>
        <p
          className={`${styles.textPurple600} hover:cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out`}
        >
          {section}
        </p>
      </div>
      <div className="flex items-center ">
        <div className="flex items-center">
          {/* <Image src={dropdown_icon} alt="dropdown_icon" />
          <span className="w-[48px] text-[#d1d5db]">EN</span> */}
          <div className="w-[60px] h-[60px]">
            <Image
              src={avatar_user}
              alt="avatar_user"
              className="hover:opacity-50 transition-all duration-200 ease-in-out hover:cursor-pointer"
            />
          </div>
        </div>
        <DropdownMenuRadioGroupDemo>
          <div className="w-[64px] h-[64px] hover:cursor-pointer  ">
            <Image
              src={noti}
              alt="notifications"
              className="hover:opacity-50 transition-all duration-200 ease-in-out"
            />
          </div>
        </DropdownMenuRadioGroupDemo>
      </div>
    </div>
  );
}
