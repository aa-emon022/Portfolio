'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Footer/Footer";

export default function ProjectPage() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>   <div className="pt-[15rem] lg:pt-[17rem] flex flex-wrap justify-center pb-[7rem]" style={gradientStyle} >
      <div className="flex flex-wrap justify-center px-[1rem] md:px-0  w-full md:w-full gap-[4rem]" >
        <div className="flex flex-col flex-wrap  pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-md  hover:scale-105" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src={
              "https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
            }
            width={500}
            height={300}
            className="h-[20rem]  object-cover brightness-75"
          />
         
          
         <h1 className="uppercase font-bold text-[#000000] pl-[.3rem]">project name: <span className="text-[#323223]">abirvab shop</span></h1>
            <div className="bg-[#101820FF] pb-2">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">React.js,Tailwind</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/12/10</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://clever-piroshki-f25ec0.netlify.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/ecommerce.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap  rounded-md pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-md hover:scale-105" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Image
              src={
                "https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-as-complement-to-design-people-testimonial-logo-icon-design-128391492.jpg"
              }
              width={500}
              height={300}
              className="h-[20rem] object-cover brightness-75"
            />

 <h1 className="uppercase font-bold text-[#000000] pl-[.3rem]">React-Next js Projects: <span className="text-[#323223]">Current Projects </span></h1>
            <div className="bg-[#101820FF] ">
             

             
                

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  

                  <div className="  ">
                    <h1 className="text-[#F2AA4CFF] text-[1.3rem] ">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/React.js-small-project.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                

                
              </div>
            </div>
          </div>


          <div className="flex flex-col flex-wrap  rounded-md pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-md hover:scale-105" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Image
              src={
                "https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-as-complement-to-design-people-testimonial-logo-icon-design-128391492.jpg"
              }
              width={500}
              height={300}
              className="h-[20rem] object-cover brightness-75"
            />

 <h1 className="uppercase font-bold text-[#000000] pl-[.3rem]">project name: <span className="text-[#323223]">testimonial </span></h1>
            <div className="bg-[#101820FF] pb-2">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">Next.js,Tailwind,API</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/08/08</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://assignment-16-flp60whpc-aa-emon022.vercel.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/assignment-16.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
          </div>
        
        <div className="flex flex-col flex-wrap  rounded-md pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-md hover:scale-105" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src={"https://m.media-amazon.com/images/I/510WmeXkLXL.png"}
            width={500}
            height={100}
            className="h-[20rem] object-cover brightness-75"
          />
             <h1 className="uppercase text-black pl-2">name:<span className="text-[#323223]">currency converter</span></h1>
            <div className="bg-[#101820FF] ">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">React.js,Tailwind,API</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/11/18</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://dapper-kringle-0c7917.netlify.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/money-exchange.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
        </div>
        <div className="flex flex-col flex-wrap rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50  hover:scale-105" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src={"https://i.ytimg.com/vi/rHTwjV1ORUQ/hqdefault.jpg"}
            width={500}
            height={300}
            className="h-[20rem] object-cover brightness-75"
          />
            <h1 className="uppercase text-black pl-2">name:<span className="text-[#323223]">Password Generator</span></h1>
            <div className="bg-[#101820FF] pb-2">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">React.js,Tailwind</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/11/1</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://lucent-profiterole-fc272d.netlify.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/Password-Generator.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
        </div>
        <div className="flex flex-col flex-wrap rounded-md pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50  hover:scale-105 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src={
              "https://cdn1.vectorstock.com/i/1000x1000/97/25/to-do-list-or-checklist-icon-can-be-used-as-logo-vector-8849725.jpg"
            }
            width={500}
            height={300}
            className="h-[20rem] object-cover brightness-75"
          />
            <h1 className="uppercase text-black pl-2">name:<span className="text-[#323223]">back-Up Event List</span></h1>
            <div className="bg-[#101820FF] pb-2">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">React.js,Tailwind</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/6/10</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://to-do-backup.netlify.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/assignment-7.git"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
        </div>
        <div className="flex flex-col rounded-md pb-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-md hover:scale-105 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/4/40/Logo_oficial_de_PortalNews_.png"
            }
            width={500}
            height={300}
            className="h-[20rem]  brightness-75 "
          />
            <h1 className="uppercase text-black pl-2">name:<span className="text-[#323223]">News</span></h1>
            <div className="bg-[#101820FF] pb-2">
              <h1 className="uppercase text-[#C3BBB3] font-bold pt-3 pl-[.3rem] ">project Info:</h1>

              <div >
                <div className='pb-[1rem] pt-2'>
                  <h1 className="text-[#F2AA4CFF] underline decoration-blue-700 pl-[.3rem]">Category Component:</h1>
                  <p className="text-[#C3BBB3] hover:text-green-600 pl-[.3rem] flex flex-wrap">Next.js,Tailwind,API</p>
                </div>

                {/* /////////////// */}
                <div className="flex flex-wrap gap-8 justify-center items-center">
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Time frame:</h1>
                    <p className="text-[#C3BBB3] hover:text-green-600">2023/7/22</p>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Live Link:</h1>
                    <Link href={"https://news-9yasotdjs-aa-emon022.vercel.app/"}>
                      <button className="text-[#C3BBB3] hover:text-green-600">View Project</button>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-[#F2AA4CFF]">Git Link</h1>
                    <Link href={"https://github.com/aa-emon022/NewsBlogs.git"} >
                      <button className="text-[#C3BBB3] hover:text-green-600">Visited Pro. Code</button>
                    </Link>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
