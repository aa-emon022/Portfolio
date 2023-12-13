'use client'
import React, { useState } from "react";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
    const [show,setShow]=useState(false)
  const  pathname = usePathname()
    const handleOnClick=()=>{
        setShow(!show)
      
    }
  return (
    <>
      <div className=" hidden md:flex md:justify-center box-border w-full  md:top-[6rem]  z-10 md:absolute">
        <div className="bg-slate-800 md:w-[34rem] lg:w-[42rem] xl:w-[51rem] h-[3rem]  rounded-2xl ">
          <div className="text-white flex justify-center items-center h-full md:gap-[3rem] xl:gap-[5rem] xl:text-[1.5rem]">
            <Link className={pathname==='/home'?"text-orange-500":"text-white"} href="/home">Home</Link>
            <Link className={pathname==='/about'?"text-orange-500":"text-white"} href="/about">About</Link>
            <Link className={pathname==='/service'?"text-orange-500":"text-white"} href="/service">Service</Link>
            <Link className={pathname==='/'?"text-orange-500":"text-white"} href="/">Projects</Link>
            <Link className={pathname==='/contact'?"text-orange-500":"text-white"} href="/contact">Contact</Link>
          </div>
        </div>
      </div>
<button className="m-[3rem] absolute md:hidden z-10" onClick={handleOnClick}> <FontAwesomeIcon icon={faBars} className="text-white w-[4rem] h-[2rem]"/></button>
     {
        show && (<div className=" md:hidden absolute  ">
     
     <div className="bg-[#FFFAF0] absolute mt-[7rem] ml-[3rem] w-[10rem] h-[23rem] z-10">
       <div className=" flex flex-col gap-[3rem] justify-center items-center mt-5">
       <Link className={pathname==='/home'?"text-orange-500":"text-black"} href="/home">Home</Link>
         <Link className={pathname==='/about'?"text-orange-500":"text-black"} href="/about">About</Link>
         <Link className={pathname==='/service'?"text-orange-500":"text-black"} href="/service">Service</Link>
         <Link className={pathname==='/'?"text-orange-500":"text-black"} href="/">Projects</Link>
         <Link className={pathname==='/contact'?"text-orange-500":"text-black"} href="/contact">Contact</Link>
       </div>
     </div>
   </div>) 
     }
    </>
  );
}
