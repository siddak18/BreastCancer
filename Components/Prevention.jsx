import { about, logo2 } from '../Data'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
const Prevention = () => {
  return (
    <section className='w-11/12 py-3 flex flex-col items-center lg:items-start'>
        <p className=' text-3xl lg:text-5xl mb-3 font-bold text-slate-700'>Prevention</p>
       <div className="flex  w-full lg:flex-row-reverse flex-col justify-between items-center mt-4">
           <div className='w-full flex justify-center items-center md:w-2/3 lg:w-5/12' >
            <img src="/next-2-1.jpeg" width="100%" className='object-contain'  height="100%"/>
           </div>
           <div className='md:w-2/3 lg:w-1/2 h-full flex flex-col items-start justify-start'>
            <p className='text-xs px-2  lg:px-0 lg:text-s lg:leading-5  2xl:text-xl 3xl:text-2xl 4xl:text-3xl  text-justify font-medium  text-slate-600'>Preventing Breast Cancer Empowering individuals with the knowledge to reduce their risk of breast cancer is a cornerstone of our mission. While certain risk factors are beyond our control, adopting a proactive approach to a healthy lifestyle can significantly contribute to prevention. Maintaining a balanced diet rich in fruits, vegetables, and whole grains, along with regular physical activity, is key. Limiting alcohol intake and avoiding tobacco products also play pivotal roles in reducing risk. Understanding and managing hormonal influences, particularly in postmenopausal women, is essential. Equally important is staying informed about family history and considering genetic counseling if necessary. Embracing regular screenings, such as mammograms and self-exams, enhances early detection opportunities. Our platform is committed to providing comprehensive information, empowering individuals to make informed choices, and fostering a community dedicated to breast cancer prevention. Together, through awareness and proactive measures, we can make strides towards a healthier, cancer-free future.</p>
            <Link href="/about" className='px-2 lg:px-0  text-sm text-nav'>Know more</Link>
           </div>
       </div>
    </section>
  )
}

export default Prevention