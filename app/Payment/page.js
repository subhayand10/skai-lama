"use client";
import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useMyContext } from "../context/MyContext";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SocialsText from "../components/SocialsText/SocialsText";
import styles from "./Payments.module.css";
import Image from "next/image";
import gpay from "../../public/gpay.webp";
import phonepe from "../../public/phonepe.png";
import paypal from "../../public/paypal.png";
import gpayQR from "../../public/gpayQR.jpg";
import phonepeQR from "../../public/phonepeQR.jpg";
import Confs from "../components/Confetti/Confs";
import Typewriter from "typewriter-effect";
import PaypalPointer from "../components/PaypalPointer/PaypalPointer";
import AnimatedPaypalPointer from "../components/PaypalPointer/AnimatedPaypalPointer";


const Payments = () => {
  const { setMenuItemIndex,windowSize,setShowConfetti,showConfetti } = useMyContext();

  const searchParams = useSearchParams();
  useEffect(() => {
    setShowConfetti(true); 
    setMenuItemIndex(3);
  }, []);
  return (
    <div className={styles.mainContainer}>
      {showConfetti && <Confs />}
      <Confs windowSize={windowSize} />
      <SideBar />
      <div className="md:mx-auto max-md:w-[100%] w-[80%] ">
        <UploadHeader section={"Payments"} title={searchParams.get("title")} />
        <div className="flex justify-between">
          <p className="mt-[-2%] mb-[2%] font-roboto text-5xl font-extrabold leading-[64.45px] w-[100%] h-[64px] text-[#7E22CE]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("It's free.You can buy me a Coffee 🥺 ☕")
                  .pauseFor(1500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
              options={
                {
                  autoStart: true,
                  loop: true,
                  deleteSpeed:2,
                  delay:50
                }
              }
            />
            
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 xl:h-[60%] h-[40%] overflow-hidden">
          <div className="w-[30%]">
            <Image src={gpayQR} alt="gPayQR" className="" />
          </div>
          <div className="w-[40%] ">
            <Image src={phonepeQR} alt="phonepeQR" className="object-cover" />
          </div>
          {/* <div className="w-[10%]">
            <Image src={paypal} alt="paypal" />
          </div> */}
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="w-[10%]">
            <Image src={gpay} alt="gPay" />
          </div>
          <div className="w-[10%]">
            <Image src={phonepe} alt="phonepe" />
          </div>
          <div className="w-[10%]">
            <a
              href="https://www.paypal.com/paypalme/SubhayanDas277"
              target="_blank"
            >
              <Image src={paypal} alt="paypal" />
            </a>
          </div>
          <AnimatedPaypalPointer>
            <PaypalPointer/>
          </AnimatedPaypalPointer>
        </div>
      </div>
    </div>
  );
};

export default Payments;
