import React from "react";
import Confetti from "react-confetti";

const Confs = ({width,height}) => {
  return <Confetti width={width} height={height} recycle={false} />;
};

export default Confs;
