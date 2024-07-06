"use client";
import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import styles from "./Config.module.css";
import { useMyContext } from "../context/MyContext";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SocialsText from "../components/SocialsText/SocialsText";

const socialMedias=["LinkedIn Post", "Twitter Post", "Twitter Thread"]

const Configuration = () => {
  const { setMenuItemIndex, linkedInPost, twitterPost,twitterThread } = useMyContext();
  const posts=[linkedInPost,twitterPost,twitterThread]
  const searchParams = useSearchParams();
  useEffect(() => {
    setMenuItemIndex(2);
  }, []);
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <div className="md:mx-auto max-md:w-[100%] w-[80%] ">
        <UploadHeader section={"Config"} title={searchParams.get("title")} />
        <div className="flex justify-between">
          <p className="mt-[-2%] mb-[2%] font-roboto text-5xl font-extrabold leading-[64.45px] w-[360px] h-[64px] text-[#7E22CE]">
            {searchParams.get("title")}
          </p>
        </div>
        <div className="border border-[2px] border-red-300 rounded-md h-[100%]">
          {socialMedias.map((socialMedias,index)=>{
            return <SocialsText SocialMedia={socialMedias} post={posts[index]}/>
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Configuration;
