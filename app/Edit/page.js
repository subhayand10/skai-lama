"use client";
import React, { useEffect,useRef } from "react";
import SideBar from "../components/SideBar/SideBar";
import styles from "./Edit.module.css";
import { useMyContext } from "../context/MyContext";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import Link from "next/link";
import { useSearchParams,useRouter } from "next/navigation";
import run from "../Api";
import CircularLoader from "../components/CircularLoader/CircularLoader";

const Edit = () => {
  const searchParams = useSearchParams();
  const router=useRouter();
  const {
    setMenuItemIndex,
    transcriptText,
    setLinkedInPost,
    setTwitterPost,
    setTwitterThread,
    setAiDataFetched,
    aiDataFetched,
    refresh,
  } = useMyContext();
  const textbox=useRef()
  useEffect(() => {
    setMenuItemIndex(1);
    textbox.current.focus()
  }, []);
  const callApi = async () => {
    setAiDataFetched(false)
    setLinkedInPost(
      await run(`Give a short and crisp linkedIn post about this video transcript Text
        ${transcriptText}`)
    );
    setTwitterPost(
      await run(`Give a short and crisp Twitter post about this video transcript Text
        ${transcriptText}`)
    );
    setTwitterThread(
      await run(`Give a short and crisp Twitter thread about this video transcript Text
        ${transcriptText}`)
    );
    router.push(`/Config?title=${searchParams.get("title")}`);
    setAiDataFetched(true)
  };
  return (
    <div className="h-[100%] flex md:flex-row flex-col ">
      <SideBar />
      <div className="md:mx-auto max-md:w-[100%] w-[70%] lg:w-[80%] h-[100%] ">
        <UploadHeader section={"Edit"} title={searchParams.get("title")} />
        <div className="flex lg:flex-row flex-col justify-between">
          <p className="mt-[-2%] mb-[2%] font-roboto text-5xl font-extrabold leading-[64.45px] text-wrap h-[64px] text-[#7E22CE]">
            Edit Transcript
          </p>
          <div className=" w-[60%] flex justify-end items-end content-between gap-4">
            <div
              className="text-[#E01919] border border-[#E01919] px-[50px] py-[10px] w-[30%] lg:w-[10%] text-center mb-4 rounded-md flex gap-2 flex-wrap justify-center max-lg:ml-2"
              onClick={callApi}
            >
              <div className="">
                <button type="button" className="text-re">
                  Discard
                </button>
              </div>
            </div>

            <div
              className="bg-black text-white py-[10px] px-[50px] w-[90%] lg:w-[10%] text-center mb-4 rounded-md flex gap-2 flex-wrap justify-center max-lg:ml-2"
              onClick={callApi}
            >
              {!aiDataFetched && (
                <div className="">
                  <CircularLoader />
                </div>
              )}
              <div className="">
                <button type="button" className="">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <textarea
          ref={textbox}
          className="h-[50%] lg:h-[65%] max-md:ml-2 max-460:w-[90%] max-md:w-[95%] w-[100%] rounded-lg pl-2 pt-2 text-[30px]"
        >
          {transcriptText}
        </textarea>
      </div>
    </div>
  );
};

export default Edit;
