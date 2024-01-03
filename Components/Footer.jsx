import React from 'react'

const Footer = () => {
  return (
   <footer className=' text-white w-full flex justify-center bg-black'>
       <div className='w-11/12 flex-col md:flex-row flex items-center justify-center gap-24 mt-20 mb-7'>
           <p className='text-white md:w-1/3 w-11/12 text-justify'>
           Join us in creating a ripple of awareness that transforms lives. By supporting those affected by breast cancer, you become an integral part of a community committed to compassion and strength. Your contribution, whether through sharing stories, participating in events, or making a financial impact, has a profound effect. Together, we can uplift spirits, amplify voices, and advance research, making a tangible difference in the lives touched by breast cancer. Every action, no matter how small, contributes to a brighter, more hopeful future for individuals and families navigating the journey of breast cancer. Thank you for being a vital force in this collective mission.
           </p>
           <form className='md:w-1/3 w-11/12 flex flex-col gap-3'>
            <p>Write to us</p>
            <input className='border-b-2 border-b-white bg-black outline-none' placeholder='Name' type="text" />
            <input className='border-b-2 border-b-white bg-black outline-none' type="text" placeholder='Contact no' />
            <textarea className='  resize-none border-b-2 border-b-white bg-black outline-none' type="text" placeholder='Message' id="" cols="30" rows="6"></textarea>
            <button type="submit" className='p-2 border-2 border-white hover:bg-white hover:text-black transition duration-1000'> Submit</button>
           </form>
       </div>
   </footer>
  )
}

export default Footer