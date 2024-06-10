"use client";
import { createContext, useContext, useState } from "react";

// Create a context with a default value
const MyContext = createContext({});

// Create a provider component
export default function MyProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [backToHome, setBackToHome] = useState(false);
  const [modalData, setModalData] = useState(() => {
    if (window.localStorage == undefined) return [];
    const savedModalData = localStorage.getItem("modalData");
    return savedModalData !== null ? JSON.parse(savedModalData) : [];
  });
  const [dragClicked, setDragClicked] = useState(false);
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(MyContext);
};
