"use client"

import * as React from "react"

import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";



export function DropdownMenuRadioGroupDemo({children,settings}) {
  const [position, setPosition] = React.useState("bottom")
  const [width, height] = useWindowSize();
  // React.useEffect(() => {
  //   if(width <750)
  //     setPosition("left")
  //   else
  // }, [width]);
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent side={!settings && width<880 ? `left`:`bottom`} className={`${settings?"w-25":"w-40"}` }>
        <DropdownMenuLabel className="ml-4">
          {!settings && "You are all caught up 😉"}
          {settings && "All set up 💥"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
