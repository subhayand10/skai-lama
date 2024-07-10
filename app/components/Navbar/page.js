import React from 'react'
import styles from "./Navbar.module.css"
import { useMyContext } from '@/app/context/MyContext';
import Image from 'next/image';
import logo from "../../../public/logo.png"
import postAi from "../../../public/postAi.png"
import home from "../../../public/home.png";
import notifications from "../../../public/notifications.png";
import settings from "../../../public/settings.png";
import { DropdownMenuRadioGroupDemo } from '../DropDown/DropDown';
const Navbar = () => {
  const {setBackToHome,modalData,backToHome}=useMyContext()
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>
            <Image src={logo} alt={"logo icon"} />
          </div>
          <div>
            <p className="font-plus-jakarta-sans text-[37.74px] font-extrabold leading-[47.56px] text-[#7E22CE]">
              Post.Ai
            </p>
          </div>
        </div>
        <div className={styles.icons}>
          <DropdownMenuRadioGroupDemo>
            <Image
              src={notifications}
              alt="notifications"
              className="cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out"
            />
          </DropdownMenuRadioGroupDemo>
          <DropdownMenuRadioGroupDemo settings={true}>
            <Image
              src={settings}
              alt="settings"
              className="cursor-pointer hover:opacity-50 transition-all duration-200 ease-in-out"
            />
          </DropdownMenuRadioGroupDemo>
        </div>
      </div>
      {modalData.length > 0 && !backToHome && (
        <div className={styles.button}>
          <button
            onClick={() => {
              setBackToHome(true);
            }}
          >
            <div
              className={`${styles.buttonInside} hover:opacity-50 transition-all duration-200 ease-in-out`}
            >
              <div className="mx-2">
                <Image src={home} alt="home" />
              </div>
              <p>Back to Home</p>
            </div>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar