import React from 'react'
import styles from "./Navbar.module.css"
import { useMyContext } from '@/app/context/MyContext';
import Image from 'next/image';
import logo from "../../../public/logo.png"
import lama from "../../../public/LAMA.png"
import home from "../../../public/home.png";
import notifications from "../../../public/notifications.png";
import settings from "../../../public/settings.png";
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
            <Image src={lama} alt={"lama icon"} />
          </div>
        </div>
        <div className={styles.icons}>
          <Image src={notifications} alt="notifications" />
          <Image src={settings} alt="settings" />
        </div>
      </div>
     {modalData.length > 0 && !backToHome && <div className={styles.button}>
        <button
          onClick={() => {
            setBackToHome(true);
          }}
        >
          <div className={styles.buttonInside}>
            <div className='mx-2'>
            <Image src={home} alt="home" />
            </div>
            <p>Back to Home</p>
          </div>
        </button>
      </div>}
    </>
  );
}

export default Navbar