"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./Upload.module.css";
import SideBar from "../components/SideBar/SideBar";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import UploadCard from "../components/UploadCard/UploadCard";
import DragDrop from "../components/DragDrop/DragDrop";
import UploadModal from "../components/UploadModal/UploadModal";

import TryOut from "../components/TryOut/TryOut";
import { useMyContext } from "../context/MyContext";
import yt from "../../public/yt.png";
import spotify from "../../public/spotify.png";
import rss from "../../public/rss_feed.png";

import { GrFormUpload } from "react-icons/gr";
import CircularLoader from "../components/CircularLoader/CircularLoader";
import { useSearchParams, useRouter } from "next/navigation";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Upload = () => {
  const {
    dragClicked,
    uploaded,
    fetched,
    setFetched,
    setMenuItemIndex,
    setTranscriptText,
    openSideBar,
    setShowAlert,
    showAlert,
  } = useMyContext();
  const [link, setLink] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const formatText = (textArr) => {
    let formattedText;
    textArr.forEach((textObj) => {
      formattedText += textObj.text + " ";
    });
    return formattedText;
  };
  const removeApos = (text) => {
    let formattedText; //&amp;#39;
    formattedText = text.replace(/&amp;#39;/g, "'");
    return formattedText.replace("undefined", "");
  };
  const sendExtractRequest = async () => {
    try {
      setFetched(false);
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      });
      if (response.statusCode == 200) {
        setLink("");
        // console.log(await response.json());
        const formattedText = formatText(await response.json());
        const finalText = removeApos(formattedText);
        console.log(finalText);
        setTranscriptText(finalText);
        setMenuItemIndex(1);
        router.push(`Edit?title=${searchParams.get("title")}`);
      } else {
        setShowAlert(true);
        enqueueSnackbar("Can't extract transcript from this video😓!!!");
        console.log("Cant exract transcript from the video");
      }
      setFetched(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setMenuItemIndex(0);
  }, []);
  return (
    <>
      {dragClicked ? (
        <UploadModal />
      ) : (
        <div className="h-[100%] flex md:flex-row flex-col">
          <SideBar upload queryParams={searchParams.get("title")} />
          <div className="md:mx-auto max-md:w-[100%] w-[80%]  ">
            <UploadHeader
              section={"Extract"}
              title={searchParams.get("title")}
            />
            <p className="w-[174px] h-[64px] mx-auto mb-2 font-roboto text-[55px] font-bold leading-[64.45px] text-[#7E22CE]">
              Upload
            </p>
            <div className="flex gap-3 w-[100%] flex-wrap">
              <UploadCard img={yt} alt={"Youtube"} />
              <UploadCard img={spotify} alt={"Spotify"} />
              <UploadCard img={rss} alt={"RSS feeds"} />
            </div>
            <div className="relative  h-[81px] w-[100%] max-lg:w-[90%] mx-auto mt-[5%]">
              <input
                placeholder="Paste Your Youtube Video Link Here"
                className={` w-[100%] h-[100%]  rounded-[41px] ${styles.uploadInput}`}
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
              <div className=" relative top-[-100%] right-[-85%] max-xl:right-[-80%] max-lg:right-[-75%] max-md:right-[-70%] max-sm:right-[-65%]  h-[100%] w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%]   ">
                <div
                  className="flex h-[100%] bg-purple-600 rounded-[200px]"
                  onClick={sendExtractRequest}
                >
                  {fetched && (
                    <GrFormUpload className="absolute top-[30%] lg:ml-[15px] xl:ml-[20px] 4xl:ml-[50px] h-[36px] w-[36px]" />
                  )}
                  {!fetched && <CircularLoader uploadPage={true} />}
                  <button className=" mx-auto">Upload</button>
                </div>
              </div>
            </div>
            {
              <SnackbarProvider
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              />
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
