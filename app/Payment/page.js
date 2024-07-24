"use client";
import React, { useEffect, useState, useRef } from "react";
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
import phonepeQR from "../../public/phonepeQR.png";
import gpQR from "../../public/gpQR.PNG";
import phQR from "../../public/phQR.PNG";
import Confs from "../components/Confetti/Confs";
import Typewriter from "typewriter-effect";
import PaypalPointer from "../components/PaypalPointer/PaypalPointer";
import AnimatedPaypalPointer from "../components/PaypalPointer/AnimatedPaypalPointer";


const Payments = () => {
  const { setMenuItemIndex,windowSize,setShowConfetti,showConfetti } = useMyContext();
   const [gpayLogoHeight, setGpayLogoHeight] = useState(0);
   const gpayLogoRef = useRef(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    setShowConfetti(true); 
    setMenuItemIndex(3);
     const updateGpayLogoHeight = () => {
       if (gpayLogoRef.current) {
         const rect = gpayLogoRef.current.getBoundingClientRect();
         console.log(rect.top)
         console.log(window.scrollY)
         const tot = rect.top + window.scrollY;
         setGpayLogoHeight(tot);
       }
     };

     // Initial calculation
     updateGpayLogoHeight();

     // Add event listener for window resize
     window.addEventListener("resize", updateGpayLogoHeight);

     // Cleanup
     return () => {
       window.removeEventListener("resize", updateGpayLogoHeight);
     };
  }, []);

  useEffect(() =>{
    console.log(gpayLogoHeight)
  },[gpayLogoHeight]);
  return (
    <div className={`h-[${gpayLogoHeight + "px"}] flex md:flex-row flex-col`}>
      {showConfetti && <Confs />}
      <Confs windowSize={windowSize} />
      <SideBar paymentsPageSize={true} />
      <div className="md:mx-auto max-md:w-[100%] w-[80%]  ">
        <UploadHeader section={"Payments"} title={searchParams.get("title")} />
        <div className="flex  justify-between flex-wrap max-xl:mb-[15%]  max-md:mt-10">
          <p className="mt-[-2%]  font-roboto text-5xl font-extrabold leading-[64.45px] w-[100%]  text-[#7E22CE] ">
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
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 2,
                delay: 50,
              }}
            />
          </p>
        </div>
        <div className=" mt-9 flex justify-center items-center max-460:flex-col gap-6 xl:h-[50%]  overflow-hidden max-lg:mt-10 max-md:mb-[20%]">
          <div className="w-[200px]">
            <Image src={gpQR} alt="gPayQR" className="" />
          </div>
          <div className="w-[200px]  ">
            <Image src={phQR} alt="phonepeQR" className="" />
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-6"
          ref={gpayLogoRef}
        >
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
            <PaypalPointer />
          </AnimatedPaypalPointer>
        </div>
      </div>
    </div>
  );
};

export default Payments;
