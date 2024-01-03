"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Treatment = () => {
  return (
    <div className='w-11/12'>
        <p className=' text-3xl lg:text-5xl mb-3 font-bold text-slate-700'>Treatment</p>
        <div className='hidden lg:flex'>
        <Swiper className='mt-6 mb-6'
      // install Swiper modules
      effect='card'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      height="400px"
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/next-2-1.jpeg" alt="" /></SwiperSlide>
    </Swiper>
    </div>
    <div className='flex lg:hidden'>
    <Swiper className='mt-6 mb-6'
      // install Swiper modules
      effect='card'
      centeredSlides
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      height="400px"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="w-full flex justify-center"><img src="/next-2-1.jpeg" alt="" /></div></SwiperSlide>
    </Swiper>
    </div>
    <div className="card w-full flex flex-col gap-4">
      <div>
        <div className='flex gap-1 lg:text-2xl  font-bold text-q'><span>1.</span><p className=''>Multidisciplinary Approach:</p></div>
        <p className='text-sm lg:text-lg text-justify mt-2'>Breast cancer treatment often involves a multidisciplinary team comprising surgeons, medical oncologists, radiation oncologists, and other healthcare professionals. The team collaborates to develop a comprehensive treatment plan tailored to the individual patient's diagnosis and needs.</p>
       </div>
       <div>
        <div className='flex lg:text-2xl gap-1  font-bold text-q'><span>2.</span><p>Surgery:</p></div>
        <p className='text-sm lg:text-lg text-justify mt-2'>Surgical interventions are common in breast cancer treatment. The type of surgery depends on factors such as the stage and type of cancer. Lumpectomy (removing the tumor and surrounding tissue) and mastectomy (removing the entire breast) are common surgical procedures. Lymph node removal may also be necessary to assess the spread of cancer.</p>
       </div>
       <div>
        <div className='flex lg:text-2xl gap-1  font-bold text-q'><span>3.</span><p>Adjuvant Therapies:</p></div>
        <p className='text-sm lg:text-lg text-justify mt-2'>Adjuvant therapies, such as chemotherapy, hormone therapy, and targeted therapy, are often used after surgery to eliminate remaining cancer cells or reduce the risk of recurrence. Chemotherapy may involve a combination of drugs, while hormone therapy is effective for hormone receptor-positive breast cancers.</p>
       </div>
       <div>
        <div className='flex lg:text-2xl gap-1  font-bold text-q'><span>4.</span><p>Radiation Therapy:</p></div>
        <p className='text-sm lg:text-lg text-justify mt-2'>Radiation therapy uses high-energy rays to target and kill cancer cells. It is often employed after surgery to destroy any remaining cancer cells in the breast or surrounding areas. The specific approach depends on the type and stage of breast cancer.</p>
       </div>
       <div>
        <div className='flex lg:text-2xl gap-1  font-bold text-q'><span>5.</span><p>Personalized Treatment Plans:</p></div>
        <p className='text-sm lg:text-lg text-justify mt-2'>Breast cancer treatment is increasingly personalized based on factors like the molecular characteristics of the tumor. Genetic testing may be performed to identify specific mutations, leading to more targeted therapies. This personalized approach helps maximize treatment effectiveness while minimizing side effects.</p>
       </div>
       
    </div>
     </div>
  )
}

export default Treatment
