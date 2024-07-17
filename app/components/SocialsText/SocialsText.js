"use client";
import React, { useEffect, useState } from "react";
import copy from "../../../public/Copy.png";
import refresh from "../../../public/refresh.png";
import del from "../../../public/delete.png";
import edit from "../../../public/edit.png";
import Image from "next/image";
import { useMyContext } from "@/app/context/MyContext";
import styles from "./SocialsText.module.css";
import Link from "next/link";
import run from "../../Api";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CircularLoader from "../CircularLoader/CircularLoader";
import { FaClipboardCheck } from "react-icons/fa";

const SocialsText = ({ SocialMedia, post, title, deleteFunc, type }) => {
  const [copiedText, setCopiedText] = useState(false);
  const {
    readOnly,
    setTwitterPost,
    setTwitterThread,
    setLinkedInPost,
    setRefresh,
    transcriptText,
    refreshFetched,
    setRefreshFetched,
  } = useMyContext();
  const handleRefresh = async (e) => {
    // setRefreshFetched({...refreshFetched,e.target.attributes.value:false})
    if (type == "tPost") {
      setRefreshFetched({ ...refreshFetched, tPost: false });
      setTwitterPost(
        await run(`Give a short and crisp Twitter post about this video transcript Text
        ${transcriptText}`)
      );
      setRefreshFetched({ ...refreshFetched, tPost: true });
    } else if (type == "tThread") {
      setRefreshFetched({ ...refreshFetched, tThread: false });
      setTwitterThread(
        await run(`Give a short and crisp Twitter thread about this video transcript Text
        ${transcriptText}`)
      );
      setRefreshFetched({ ...refreshFetched, tThread: true });
    } else {
      console.log("hello");
      console.log(type);
      setRefreshFetched({ ...refreshFetched, lPost: false });
      setLinkedInPost(
        await run(`Give a short and crisp linkedIn post about this video transcript Text
        ${transcriptText}`)
      );
      setRefreshFetched({ ...refreshFetched, lPost: true });
    }
  };
  console.log(refreshFetched);
  return (
    <div className="lg:h-[35%] md:h-[35%] h-[50%] mt-2 px-2   ">
      <div className="h-[100%]">
        <div className="flex justify-between ">
          <p className="h-[54px] mb-5 font-roboto text-[38.57px] font-bold leading-[57.54px] text-[#7E22CE]">{`${SocialMedia}`}</p>
          <div className="flex gap-3">
            {/* <Link href={{ pathname: "Payment", query: { title } }}> */}
            <div
              className="hover:cursor-pointer "
              onClick={(e) => {
                deleteFunc(e, "edit");
              }}
            >
              <Image
                src={edit}
                alt="edit"
                className=" hover:opacity-50 transition-all duration-200 ease-in-out"
              />
            </div>
            {/* </Link> */}
            {!copiedText ? (
              <CopyToClipboard
                text={post}
                onCopy={() => {
                  setCopiedText(true);
                  setTimeout(() => {
                    setCopiedText(false);
                  }, 1000);
                }}
              >
                <div className="hover:cursor-pointer">
                  <Image
                    src={copy}
                    alt="copy"
                    className="hover:opacity-50 transition-all duration-200 ease-in-out"
                  />
                </div>
              </CopyToClipboard>
            ) : (
              <FaClipboardCheck className="h-[30%] " />
            )}
            {refreshFetched[type] ? (
              <div className="hover:cursor-pointer" value={type}>
                <Image
                  src={refresh}
                  alt="refresh"
                  value={type}
                  onClick={handleRefresh}
                  className="hover:opacity-50 transition-all duration-200 ease-in-out"
                />
              </div>
            ) : (
              <div className="w-10">
                <CircularLoader />
              </div>
            )}

            <div
              className="hover:cursor-pointer"
              onClick={(e) => {
                deleteFunc(e);
              }}
            >
              <Image
                src={del}
                alt="delete"
                className="hover:opacity-50 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <textarea
          className={`${styles.text} w-[100%] bg-transparent  `}
          value={post}
          onChange={(e) => {
            if (type == "tPost" && !readOnly["tPost"])
              setTwitterPost(e.target.value);
            else if (type == "tThread" && !readOnly["tThread"])
              setTwitterThread(e.target.value);
            else if (type == "lPost" && !readOnly["lPost"])
              setLinkedInPost(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SocialsText;
