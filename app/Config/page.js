"use client";
import React, { useEffect, useState,useRef } from "react";
import SideBar from "../components/SideBar/SideBar";
import styles from "./Config.module.css";
import { useMyContext } from "../context/MyContext";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SocialsText from "../components/SocialsText/SocialsText";

const socialMedias = ["LinkedIn Post", "Twitter Post", "Twitter Thread"];

const Configuration = () => {
  const {
    setMenuItemIndex,
    linkedInPost,
    setLinkedInPost,
    twitterPost,
    setTwitterPost,
    twitterThread,
    setTwitterThread,
    setWindowSize,
    setReadOnly,
    readOnly,
  } = useMyContext();
  const posts = [linkedInPost, twitterPost, twitterThread];
  const searchParams = useSearchParams();
  const textbox = useRef([]);

  const deleteLPost = (e, edit) => {
    if (edit) {
      setReadOnly({ ...readOnly, lPost: false });
    } else {
      setLinkedInPost("");
    }
  };
  const deleteTPost = (e, edit) => {
    if (edit) {
      setReadOnly({ ...readOnly, tPost: false });
    } else setTwitterPost("");
  };
  const deleteTThread = (e, edit) => {
    if (edit) setReadOnly({ ...readOnly, tThread: false });
    else setTwitterThread("");
  };
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setMenuItemIndex(2);
    console.log(textbox)
      // textbox.current.forEach((ref, index) => {
      //   if (ref.current) {
      //     ref.current.focus();
      //   }
      // });
      // textbox.current[0].focus();
      // textbox.current[1].focus();
  }, []);
  return (
    <div className="h-[100%] flex md:flex-row flex-col">
      <SideBar />
      <div className=" xl:mx-auto max-xl:w-[100%] w-[80%] ">
        <UploadHeader section={"Config"} title={searchParams.get("title")} />
        <div className="  rounded-md h-[70%] max-md:h-[100%] max-md:mt-9 ">
          {socialMedias.map((socialMedias, index) => {
            console.log("render");
            return (
              <SocialsText
                refName={textbox}
                key={index}
                customIndex={index}
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
