import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularLoader({uploadPage}) {
  return (
    <Box
      sx={{ display: "flex" }}
      className={`${
        uploadPage &&
        "absolute top-[30%] lg:ml-[15px] xl:ml-[15px] mt-[-1%]  4xl:ml-[50px] h-[36px] w-[36px] "
      }`}
    >
      <CircularProgress />
    </Box>
  );
}
