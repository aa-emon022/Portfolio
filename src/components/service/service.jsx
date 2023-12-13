'use client'

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Service() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
 

  return (
    <>
      <div className='pt-[15rem] text-center'>
        <h3 className='text-green-400 pb-[1rem]' data-aos="fade-right">I am Great At</h3>
        <h1 className='text-[2rem] text-white pb-[1rem]' data-aos="fade-up">Crafting Seamless Experiences as a Full Stack Developer</h1>
        <p className='text-[#DADBDD] pb-[1rem]' data-aos="fade-down">
          Transforming Ideas into Reality: Full Stack Developer. End-to-End Development Expertise: Full Stack Wizard.
          From Front-end to Back-end: Full Stack Brilliance.
        </p>
      </div>
      <div className='py-[3rem] px-[1.5rem] md:px-0' data-aos="zoom-in-down">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
         
          className='mySwiper w-full lg:w-[40rem] xl:w-[56rem] h-[28rem] pb-[10rem]'
        >
         
            <SwiperSlide className='bg-[#E1D9D1]'>
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://cdn-images-1.medium.com/max/3528/1*Yejyd-So5Ze1ksQzKW43DA.png" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>Next js Developer</h1>
                <p className='text-black'>A Next. js developer is a software developer who uses the Next. js framework alongside ReactJS to build web applications.</p>
              </div>
            </SwiperSlide>
            
         



            <SwiperSlide className='bg-[#E1D9D1]'>
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&fit=max&w=930" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>Web Design</h1>
                <p className='text-black'>The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup.</p>
              </div>
            </SwiperSlide>



            
            <SwiperSlide className='bg-[#E1D9D1]' >
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/web-application.gif" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>Web Application</h1>
                <p className='text-black'>A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className='bg-[#E1D9D1]' >
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://qph.cf2.quoracdn.net/main-qimg-369787c22f255e420696df6261895e48-lq" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>SEO</h1>
                <p className='text-black'>Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className='bg-[#E1D9D1]' >
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://dariopironi.com/wp-content/uploads/2022/09/How-to-Become-a-React-Developer.png" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>React Developer</h1>
                <p className='text-black'>A React developer uses their programming skills to create JavaScript-based applications for web or mobile environments</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className='bg-[#E1D9D1]' >
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>Full Stack Developer</h1>
                <p className='text-black'>A full-stack developer helps build and maintain both the front-end and the back-end of a website</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className='bg-[#E1D9D1]' >
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src="https://cdn.cookielaw.org/logos/028e799e-5bb4-4f89-9ce8-1718d42d344c/22c2e2c0-3df0-4958-8672-1194370ee230/542a9b3e-88eb-4f84-95fd-b19e01352169/Logo-Prisma.png" width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>Prisma OEM Developer</h1>
                <p className='text-black'>Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB</p>
              </div>
            </SwiperSlide>

        
        </Swiper>
      </div>
    </>
  );
}
