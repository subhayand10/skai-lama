"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import styles from "./Config.module.css";
import { useMyContext } from "../context/MyContext";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SocialsText from "../components/SocialsText/SocialsText";

const socialMedias=["LinkedIn Post", "Twitter Post", "Twitter Thread"]

const Configuration = () => {
  const { setMenuItemIndex, linkedInPost,setLinkedInPost, twitterPost,setTwitterPost,twitterThread,setTwitterThread,setWindowSize,setReadOnly,readOnly } = useMyContext();
  const posts=[linkedInPost,twitterPost,twitterThread]
  const searchParams = useSearchParams();

  const deleteLPost=(editFlag)=>{
    if(editFlag)
    {
      setReadOnly({...readOnly,lPost:false});

    }
    else
    setLinkedInPost("")
  }
   const deleteTPost = (editFlag) => {
    if (editFlag) {
      setReadOnly({ ...readOnly, tPost: false });
    }
    else
     setTwitterPost("");
   };
    const deleteTThread = (editFlag) => {
      setTwitterThread("");
    };
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setMenuItemIndex(2);
  }, []);
  return (
    <div className="h-[100%] flex md:flex-row flex-col">
      <SideBar />
      <div className="md:mx-auto max-md:w-[100%] w-[80%] ">
        <UploadHeader section={"Config"} title={searchParams.get("title")} />
        <div className=" border-[2px]  rounded-md h-[80%] ">
          {socialMedias.map((socialMedias, index) => {
            console.log("render");
            return (
              <SocialsText
              key={index}
                type={index == 0 ? "lPost" : index == 1 ? "tPost" : "tThread"}
                SocialMedia={socialMedias}
                post={posts[index]}
                title={searchParams.get("title")}
                deleteFunc={
                  index == 0
                    ? deleteLPost
                    : index == 1
                    ? deleteTPost
                    : deleteTThread
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
