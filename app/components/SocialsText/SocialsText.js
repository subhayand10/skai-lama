import React, { useEffect, useState } from "react";
import copy from "../../../public/Copy.png";
import refresh from "../../../public/refresh.png";
import del from "../../../public/delete.png";
import edit from "../../../public/edit.png";
import Image from "next/image";
import { useMyContext } from "@/app/context/MyContext";
import styles from "./SocialsText.module.css";
import Link from "next/link";
import run from "../../Api"
import { CopyToClipboard } from "react-copy-to-clipboard";
import CircularLoader from "../CircularLoader/CircularLoader";
import { FaClipboardCheck } from "react-icons/fa";

const SocialsText = ({ SocialMedia, post, title, deleteFunc, type }) => {
  const [editFlag, setEditFlag] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const {
    readOnly,
    setTwitterPost,
    setTwitterThread,
    setLinkedInPost,
    setRefresh,
    transcriptText,
    refreshFetched,
    setRefreshFetched
  } = useMyContext();
  console.log(post);
  // useEffect(()=>{
  //   setAiDataFetched(false)
  // },[])
  const handleRefresh = async (e) => {

      // setRefreshFetched({...refreshFetched,e.target.attributes.value:false})
    if (type == "tPost")
    {
      setRefreshFetched({...refreshFetched,tPost:false})
      setTwitterPost(
        await run(`Give a short and crisp Twitter post about this video transcript Text
        ${transcriptText}`)
      );
      setRefreshFetched({...refreshFetched,tPost:true})
    }
    else if (type == "tThread")
    {
       setRefreshFetched({ ...refreshFetched, tThread: false });
      setTwitterThread(
        await run(`Give a short and crisp Twitter thread about this video transcript Text
        ${transcriptText}`)
      );
       setRefreshFetched({ ...refreshFetched, tThread: true });

    }
    else{
      console.log("hello")
      console.log(type)
 setRefreshFetched({ ...refreshFetched, lPost: false });
      setLinkedInPost(
        await run(`Give a short and crisp linkedIn post about this video transcript Text
        ${transcriptText}`)
      );
       setRefreshFetched({ ...refreshFetched, lPost: true });
    }
  };
  console.log(refreshFetched)
  return (
    <div className="h-[31%] mt-2 px-2 border border-b-1 border-x-0 border-t-0  ">
      <div className="h-[100%]">
        <div className="flex justify-between">
          <p className="h-[54px] mb-5 font-roboto text-[38.57px] font-bold leading-[57.54px] text-[#7E22CE]">{`${SocialMedia}`}</p>
          <div className="flex gap-3">
            {/* <Link href={{ pathname: "Payment", query: { title } }}> */}
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setEditFlag(true);
                deleteFunc(true);
              }}
            >
              <Image src={edit} alt="edit" className="" />
            </div>
            {/* </Link> */}
            {!copiedText ? (
              <CopyToClipboard text={post} onCopy={() => setCopiedText(true)}>
                <div className="hover:cursor-pointer">
                  <Image src={copy} alt="copy" className="" />
                </div>
              </CopyToClipboard>
            ) : (
              <FaClipboardCheck className="h-[30%] "/>
            )}
            {refreshFetched[type] ? (
              <div className="hover:cursor-pointer" value={type}>
                <Image
                  src={refresh}
                  alt="refresh"
                  value={type}
                  onClick={handleRefresh}
                  className=""
                />
              </div>
            ) : (
              <div className="w-10">
                <CircularLoader />
              </div>
            )}

            <div className="hover:cursor-pointer" onClick={deleteFunc}>
              <Image src={del} alt="delete" className="" />
            </div>
          </div>
        </div>
        {/* <textarea
          className={`${styles.text} w-[100%] bg-transparent outline-none `}
       
        >
          {post.length>0 && post}
        </textarea> */}
        <textarea
          className={`${styles.text} w-[100%] bg-transparent outline-none `}
          value={post}
          onChange={(e) => {
            if (editFlag) {
              if (type == "tPost") setTwitterPost(e.target.value);
              else if (type == "tThread") setTwitterThread(e.target.value);
              else setLinkedInPost(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SocialsText;
