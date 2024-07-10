"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/app/components/ui/progress";

export function TopProgressBar() {
const [progress, setProgress] = useState(10);

useEffect(() => {
  const timer = setTimeout(() => setProgress((prev)=>prev+10), 500);
//   return () => clearTimeout(timer);
}, []);

return <Progress value={10} className="w-[60%] bg-black" />;
}
