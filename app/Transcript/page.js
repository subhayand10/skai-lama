import React from "react";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import SideBar from "../components/SideBar/SideBar";

const Transcript = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[50%] mx-auto">
        <UploadHeader transcript={true} />
        <div className="">
          <div className="ml-4 mb-7 flex justify-between">
            <p>Edit Transcript</p>
            <div className="flex gap-3">
              <button>Discard</button>
              <button>Save & Exit</button>
            </div>
          </div>
          <input type="text" className="h-[800px] w-[1000px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Transcript;
