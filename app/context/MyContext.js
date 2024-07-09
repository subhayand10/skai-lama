"use client";
import { createContext, useContext, useState } from "react";

// Create a context with a default value
const MyContext = createContext({});

// Create a provider component
export default function MyProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [backToHome, setBackToHome] = useState(false);
  const [fetched, setFetched] = useState(true);
  const [menuItemIndex, setMenuItemIndex] = useState(0);
  const [transcriptText, setTranscriptText] = useState("");
  const [linkedInPost, setLinkedInPost] = useState("");
  const [twitterPost, setTwitterPost] = useState("");
  const [twitterThread, setTwitterThread] = useState("");
  const [aiDataFetched, setAiDataFetched] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentProjectTitle, setCurrentProjectTitle] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [dragClicked, setDragClicked] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [readOnly, setReadOnly] = useState({ lPost: true ,tPost:true,tThread:true});
  const [refreshFetched, setRefreshFetched] = useState({
    lPost: true,
    tPost: true,
    tThread: true,
  });
  const [modalData, setModalData] = useState(() => {
    if (window.localStorage == undefined) return [];
    const savedModalData = localStorage.getItem("modalData");
    return savedModalData !== null ? JSON.parse(savedModalData) : [];
  });
  return (
    <MyContext.Provider
      value={{
        dragClicked,
        setDragClicked,
        open,
        setOpen,
        modalData,
        setModalData,
        backToHome,
        setBackToHome,
        uploaded,
        setUploaded,
        fetched,
        setFetched,
        menuItemIndex,
        setMenuItemIndex,
        transcriptText,
        setTranscriptText,
        linkedInPost,
        setLinkedInPost,
        twitterPost,
        setTwitterPost,
        twitterThread,
        setTwitterThread,
        aiDataFetched,
        setAiDataFetched,
        windowSize,
        setWindowSize,
        showConfetti,
        setShowConfetti,
        currentProjectTitle,
        setCurrentProjectTitle,
        openSideBar,
        setOpenSideBar,
        readOnly,
        setReadOnly,
        refresh,
        setRefresh,
        refreshFetched,
        setRefreshFetched,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(MyContext);
};
