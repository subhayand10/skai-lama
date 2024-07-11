import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const DynamicMyContext = dynamic(() => import("../context/MyContext"), {
  ssr: false,
});

export default function WithDynamicContext({ children }) {
  const [MyContext, setMyContext] = useState(null);

  useEffect(() => {
    DynamicMyContext.then((mod) => {
      setMyContext(() => mod.useMyContext);
    });
  }, []);

  if (!MyContext) return null; // or a loading indicator

  return children(MyContext);
}
