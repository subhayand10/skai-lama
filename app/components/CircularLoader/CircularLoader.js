import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {Circles } from "react-loader-spinner";

export default function CircularLoader({uploadPage}) {
  return (
    <div
      className={`${
        uploadPage &&
        "absolute top-[30%] lg:ml-[15px] xl:ml-[15px] mt-[-1%]  4xl:ml-[50px] h-[36px] w-[36px] "
      }`}
    >
      <Circles
        height="30"
        width="30"
        color="#000000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
