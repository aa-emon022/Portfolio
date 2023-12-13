"use client";
import React, { useEffect } from "react";
import Img from "@/img/profile..jpg";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/Footer/Footer";
export default function timeLine() {
  
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="absolute bg-[#E1D9D1] w-full pt-[10rem] lg:pt-[20rem]">
        <div className="shadow-sm flex flex-col lg:flex-row mx-4  justify-center items-center " >
          <div className=" relative  lg:left-[3rem]  rounded-tl-9 rounded-tr-[106px] rounded-br-21 rounded-bl-[115px] bg-gradient-to-r from-[#3F5EFB] via-[#9C52B4] to-[#FC466B]  lg:w-[30rem] lg:flex lg:justify-center lg:items-center" data-aos="zoom-in">
            <Image
              src={Img}
              alt="Movie"
              width={200}
              height={500}
              className="border-4 border-white ring-4 ring-indigo-300 rounded-2xl lg:h-[13rem] "
            />
          </div>
          <div className="flex-1 pb-[2rem] lg:ml-[2rem] ">
            <h2 className="mb-4 text-center text-[2rem]" data-aos="fade-up">Personal Info:</h2>
            <ul className="list-outside sm:px-[3rem]" >
              <li className="mb-2 p-2 bg-gray-300 rounded-md  lg:w-[25rem] 2xl:text-center 2xl:text-[1.6rem] 2xl:w-full" data-aos="flip-up">
                Abdullah A. Emon
              </li>
              <li className="mb-2 p-2 bg-gray-300 rounded-md 2xl:text-center 2xl:text-[1.6rem] lg:w-[25rem] 2xl:w-full" data-aos="flip-down">
                BirthDay: 25 sep. 1997
              </li>
              <li className="mb-2 p-2 bg-gray-300 rounded-md 2xl:text-center 2xl:text-[1.6rem] lg:w-[25rem] 2xl:w-full" data-aos="flip-up">
                Nationality: Bangladeshi
              </li>
              <li className="mb-2 p-2 bg-gray-300 rounded-md 2xl:text-center 2xl:text-[1.6rem] lg:w-[25rem] list-outside 2xl:w-full" data-aos="flip-down">
                Present Address: Badda, Dhaka
              </li>
              <li className="mb-2 p-2 bg-gray-300 rounded-md 2xl:text-center 2xl:text-[1.6rem] lg:w-[25rem] list-outside 2xl:w-full" data-aos="flip-up">
                Phone: 01615399815
              </li>
              <li className="mb-2 p-2 bg-gray-300 rounded-md 2xl:text-center 2xl:text-[1.6rem] lg:w-[25rem] list-outside 2xl:w-full" data-aos="flip-down">
                Languages: Bengali, English, Hindi
              </li>
            </ul>
          </div>
        </div>
        {/* ---------------------skill ----------------------------------- */}

        <div className="box-border w-full px-[3rem]">
          <div className="flex justify-center pt-[8rem] pb-[3rem] ">
            <h1 className="text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[10rem] h-[3rem] text-[1.5rem] pt-[.3rem]">
              Front End
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
            <div>
              <p>HTML</p>
              <ProgressBar
                completed={90}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
            <div>
              <p>CSS</p>
              <ProgressBar
                completed={70}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
            <div>
              <p>TailWind</p>
              <ProgressBar
                completed={70}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
            <div>
              <p>JavaScript</p>
              <ProgressBar
                completed={89}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
            <div>
              <p>React JS</p>
              <ProgressBar
                completed={92}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
            <div>
              <p>Next JS</p>
              <ProgressBar
                completed={90}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
              />
            </div>
          </div>
        </div>

        <div className="box-border w-full px-[3rem]">
          <div className="flex justify-center pt-[3rem] pb-[2rem] ">
            <h1 className="text-center bg-gradient-to-r from-pink-500 to-yellow-500  hover:from-green-400 hover:to-blue-500 w-[10rem] h-[3rem] text-[1.5rem] pt-[.3rem]">
              Back End
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div>
              <p>Node js</p>
              <ProgressBar
                completed={90}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#EB5406"
              />
            </div>
            <div>
              <p>Express Js</p>
              <ProgressBar
                completed={85}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#EB5406"
              />
            </div>
            <div>
              <p>Next js</p>
              <ProgressBar
                completed={97}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#EB5406"
              />
            </div>
          </div>
        </div>

        <div className="box-border w-full px-[3rem]">
          <div className="flex justify-center pt-[3rem] pb-[2rem]">
            <h1 className="text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[10rem] h-[3rem] text-[1.5rem] pt-[.3rem]">
              DATABASE
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div>
              <p>SQL</p>
              <ProgressBar
                completed={90}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#808000"
              />
            </div>
            <div>
              <p>MYSQL</p>
              <ProgressBar
                completed={94}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#808000"
              />
            </div>
            <div>
              <p>PRISMA</p>
              <ProgressBar
                completed={90}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#808000"
              />
            </div>
          </div>
        </div>


        <div className="box-border w-full px-[3rem]">
          <div className="flex justify-center pt-[3rem] pb-[2rem]">
            <h1 className="text-center bg-gradient-to-r from-pink-500 to-yellow-500  hover:from-green-400 hover:to-blue-500 w-[10rem] h-[3rem] text-[1.5rem] pt-[.3rem]">
              OTHERS
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div>
              <p>GIT-HUB</p>
              <ProgressBar
                completed={97}
                animateOnRender={true}
             
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#5865F2"
              />
            </div>
            <div>
              <p>POST MAN</p>
              <ProgressBar
                completed={98}
                animateOnRender={true}
                transitionDuration="6s"
                className="w-[13rem] sm:w-[16rem] md:w-[20rem]"
                bgColor="#5865F2"
              />
            </div>
           
          </div>
        </div>





        {/* ---------------------skill End ------------------------------ */}

        <div>
          <ul className="timeline timeline-vertical box-border w-full pt-[10rem] pl-[16rem] md:ml-0 ">
            <li className="h-[10rem]  " data-aos="flip-left">
              <div className="timeline-start timeline-box w-[15rem] md:w-[20rem] lg:w-[22rem] xl:w-[30rem] text-center">
                <h1>2019-2023</h1>
                <h1>Varendra University</h1>
                <p>Computer Science And Engineering</p>
              </div>
              <div className="timeline-middle md:timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5  h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-primary " />
            </li>
            <li className="h-[10rem]" data-aos="flip-right">
              <hr className="bg-primary" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:timeline-end timeline-box w-[15rem] lg:w-[22rem] xl:w-[30rem] text-center">
                <h1>2015-2017</h1>
                <h1>Rajshahi Govt. model High School & College</h1>
                <p>Science</p>
              </div>
              <hr className="bg-primary" />
            </li>
            <li className="h-[10rem] " data-aos="flip-left">
              <hr className="bg-primary" />
              <div className="timeline-start timeline-box w-[15rem] md:w-[20rem] lg:w-[22rem] xl:w-[30rem] text-center">
                <h1>2015</h1>
                <h1>Matikata High School</h1>
                <p>Science</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <Footer/>
      </div>
      
    </>
  );
}
