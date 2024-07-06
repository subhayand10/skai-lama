import React from 'react'
import copy from "../../../public/Copy.png"
import refresh from "../../../public/refresh.png";
import del from "../../../public/delete.png";
import edit from "../../../public/edit.png";
import Image from 'next/image';
import { useMyContext } from '@/app/context/MyContext';
import styles from "./SocialsText.module.css"

const SocialsText = ({SocialMedia,post}) => {
  return (
    <div className="h-[20%] mt-2 px-2 border border-b-1 border-x-0 border-t-0 border-red-400 ">
      <div className='h-[100%]'>
        <div className="flex justify-between">
          <p className="h-[54px] mb-5 font-roboto text-[38.57px] font-bold leading-[57.54px] text-[#7E22CE]">{`${SocialMedia}`}</p>
          <div className="flex gap-3">
            <div className="">
              <Image src={edit} alt="edit" className="bg-[#EDEDED]" />
            </div>
            <div>
              <Image src={copy} alt="copy" className="bg-[#EDEDED]" />
            </div>
            <div>
              <Image src={refresh} alt="refresh" className="bg-[#EDEDED]" />
            </div>
            <div>
              <Image src={del} alt="delete" className="bg-[#EDEDED]" />
            </div>
          </div>
        </div>
        <textarea
          className={`${styles.text} w-[100%] bg-transparent outline-none `}
          readOnly
        >
          {post}
        </textarea>
      </div>
    </div>
  );
}

export default SocialsText