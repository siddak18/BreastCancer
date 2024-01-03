import { about, logo2 } from '../Data'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <section className='w-11/12 py-3 flex flex-col items-center lg:items-start'>
        <p className=' text-3xl lg:text-5xl mb-3 font-bold text-slate-700'>About Breast Cancer</p>
       <div className="flex w-full lg:flex-row flex-col justify-between items-center mt-10">
           <div className='w-full flex justify-center items-center md:w-2/3 lg:w-5/12' >
            <img src="/next-2-1.jpeg" width="100%" className='object-contain'  height="100%"/>
           </div>
           <div className='md:w-2/3 lg:w-1/2 h-full flex flex-col items-start justify-start'>
            <p className='text-xs px-2  lg:px-0 lg:text-s lg:leading-5  2xl:text-xl 3xl:text-2xl 4xl:text-3xl  text-justify font-medium  text-slate-600'>Breast cancer is a multifaceted disease characterized by the abnormal proliferation of cells within breast tissues. Affecting both men and women, though more prevalent in the latter, this condition demands a comprehensive understanding for effective management. Various types, such as ductal and lobular carcinoma, necessitate careful staging to determine the extent of the disease. While risk factors include age, gender, family history, and genetic mutations, early detection remains paramount. Recognizing symptoms like breast changes and participating in regular screenings, including mammograms, are vital for prompt diagnosis. Treatment approaches encompass surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy, personalized to each case. Through this platform, we aim to empower individuals with reliable information, promote awareness, and provide a supportive space for sharing experiences. Together, we strive for a world where knowledge and unity prevail against breast cancer.</p>
            <Link href="/about" className='px-2 lg:px-0  text-sm text-nav'>Know more</Link>
           </div>
       </div>
    </section>
  )
}

export default About