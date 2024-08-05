import { enqueueSnackbar } from "notistack";

const YtSnackBar = (title, link,index,length) => {
  enqueueSnackbar(title, {
    variant: "info",
    autoHideDuration: 3000,
    action: () => (
      <a
      href={link}
      target="_blank"
        color="inherit"
        size="small"
      >
        {index==length-1?"":"Watch"}
      </a>
    ),
  });
};

export default YtSnackBar;

