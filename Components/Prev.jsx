"use client"
import React from 'react'
import YouTube from 'react-youtube'

const Prev = () => {
  const opts = {
    height: '300',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <section className='w-11/12 py-10 flex flex-col gap-8'>
        <div className="flex flex-col gap-3 lg:flex-row justify-between">
            <div className='lg:w-1/2 w-full flex flex-col gap-5'>
         <p className='font-bold text-pink-400 text-5xl'>What Can I Do to Reduce My Risk of Breast Cancer?</p>
         <p className='font-bold text-slate-400 text-q'>Many factors over the course of a lifetime can influence your breast cancer risk. You can’t change some factors, such as getting older or your family history, but you can help lower your risk of breast cancer by taking care of your health in the following ways—</p>
         <ol className=' list-disc ml-4'>
                <li className='text-slate-600'> <span className='font-bold text-black'>Keep a healthy weight.</span> </li>
                <li className='text-slate-600'> <span className='font-bold text-black'>Be physically active.</span></li>
                <li className='text-slate-600'> Choose not to drink <span className='font-bold text-black'>alcohol.</span> , or drink alcohol in moderation.</li>
                <li className='text-slate-600'>  If you are taking, or have been told to take, <span className='font-bold text-black'>hormone replacement therapy or oral contraceptives (birth control pills)</span> , ask your doctor about the risks and find out if it is right for you.</li>
                <li className='text-slate-600'> <span className='font-bold text-black'>Breastfeed your children </span>, if possible.</li>
                <li className='text-slate-600'> If you have a <span className='font-bold text-black'>family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes,</span>  talk to your doctor about other ways to lower your risk.</li>
            </ol>
         </div>
         <div className='lg:w-2/5  w-full flex flex-col items-center '>
            <YouTube videoId='nYM2CcuhS4E' opts={opts}></YouTube>
            <p className='font-bold  text-slate-400 text-q'>You can make healthy choices to help lower your breast cancer risk. CDC’s Dr. Temeika Fairley explains in this video.</p>
         </div>
         </div>
         <div className="flex flex-col gap-4">
            <p className='font-bold text-pink-300 text-xl'>Staying healthy throughout your life will lower your risk of developing cancer, and improve your chances of surviving cancer if it occurs.</p>
         </div>
     </section>
  )
}

export default Prev