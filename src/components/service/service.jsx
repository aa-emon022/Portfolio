'use client'

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import ApiCall from '@/json/routes-manifest.json';
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
          {ApiCall.map((item, index) => (
            <SwiperSlide className='bg-[#E1D9D1]' key={index}>
              <div className='flex flex-col justify-center items-center p-2 gap-y-[2rem]'>
                <Image src={item.img} width={400} height={600} alt='r' className='w-[17rem] h-[10rem] rounded-full ring-offset-2 ring-2 ring-blue-300' />
                <h1 className='text-2xl text-bold text-[#aa46c4]'>{item.title}</h1>
                <p className='text-black'>{item.body}</p>
               
              </div>
             
            </SwiperSlide>
            
          ))}
        
        </Swiper>
      </div>
    </>
  );
}
