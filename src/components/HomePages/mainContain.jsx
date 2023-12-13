'use client'
import React, { useEffect } from "react";
import MyPhoto from "@/img/blackt.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Number from "./nunberSpring";

export default function mainContain() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const gradientStyle = {
    backgroundImage: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row absolute  w-full lg:h-screen pt-[8rem] md:pt-[14rem] " style={gradientStyle}>
        {/* card */}
        <div className="mx-[1rem] sm:mx-[3rem] md:mx-auto lg:mr-0 md:w-[30rem] lg:w-[35rem] lg:mx-0 md:box-border lg:ml-[6rem] rounded-2xl md:h-[35rem] h-[35rem] bg-slate-800" data-aos="fade-right">
          <div className="flex flex-col justify-center items-center mt-[2.7rem] gap-3">
            <h1>
              <span className="text-white md:text-3xl lg:text-lg">Hy! I'm</span>{" "}
              <span className="text-yellow-300 md:text-3xl lg:text-lg">Abdullah Al Emon</span>
            </h1>
            <p className="text-[#64748b]">Full Stack Developer</p>
            <Image
              src={MyPhoto}
              alt="my photos"
              width={200}
              height={100}
              className="rounded-[50%] ring-4 h-[14rem]"
            />
            <p className="text-[#64748b] md:text-3xl lg:text-lg">abdullah.a.emon26@gmail.com</p>
            <p className="text-[#64748b]">Faridpur,Dhaka</p>
            <div className="flex gap-4 text-center">
              <button className="bg-[#64748b] h-[1rem] mt-1">
                <Link href={"https://www.facebook.com/A.A.Emon022/"}>
                  <FontAwesomeIcon icon={faFacebook} className="mb-[1rem]" />
                </Link>
              </button>
              <button className="text-[#64748b]">
                <Link href="https://github.com/aa-emon022">
                  <FontAwesomeIcon icon={faGithub} className="w-[1rem] h-6" />
                </Link>
              </button>
              <button className="text-[#64748b]">
                <Link href="https://www.linkedin.com/in/aaemon250997/">
                  <FontAwesomeIcon icon={faLinkedin} className="w-[1rem] h-6" />
                </Link>
              </button>
            </div>
            <button className="btn btn-outline btn-primary bg-orange-500">
              <Link href='https://drive.google.com/file/d/1t7srp0n-pyy_ESLaMhcjDj4X6VNnpzDq/view?usp=sharing' download='CV-Abdullah-Al-Emon'>CV Download</Link>
            </button>
          </div>
        </div>
        {/* contain */}
        <div  className="w-auto lg:w-[60rem] p-4 md:p-8 lg:p-12 box-border" data-aos="fade-down">
  <div className="p-4 md:p-8 lg:p-12 " >
    <h3 className="text-[#a7a8a8]">Hi There I'm</h3>
    <h1 className='text-white text-3xl md:text-4xl lg:text-4xl pb-[2rem] '>Full Stack Developer<span className="text-yellow-200">!</span></h1>
    <p className="text-[#a7a8a8] text-sm md:text-base lg:text-lg">
      "I'm a web application developer specializing in full stack
      development with expertise in HTML, CSS, Tailwind, JavaScript,
      React, NextJS, Prisma, MySQL, and MongoDB. I'm passionate about
      crafting user-friendly web applications and thrive on tackling
      challenging technical problems. My goal is to work with
      cutting-edge teams on projects that prioritize exceptional user
      experiences, especially in innovative startup environments."
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="text-center">
        <p className="text-2xl text-blue-500 flex justify-center">
          <Number n={3} /><span>+</span>
        </p>
        <p className="text-[#a7a8a8]">YEAR OF EXPERIENCE</p>
      </div>

      <div className="text-center">
        <p className="text-2xl text-blue-500 flex justify-center ">
         <Number n={60} /> <span>+</span> 
        </p>
        <p className="text-[#a7a8a8]">PROJECTS COMPLETED</p>
      </div>

      <div className="text-center">
        <p className="text-2xl text-blue-500 flex justify-center">
          <Number n={5} /><span>+</span>
        </p>
        <p  className="text-[#a7a8a8]">PROJECTS WITH THE TEAM</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
