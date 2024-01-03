"use client"
import React, {  useEffect, useState } from 'react'
import { Navobj } from '../Data';

import { logo } from '../Data';
import Link from 'next/link';
const Navbar = () => {
    const [isScoll,setScroll]=useState(true);
    const [isactive,setisactive]=useState(0);
    
    // console.log(isactive===0);
    // window.addEventListener("scroll",()=>{
    //   if(window.scrollY>10){
    //     setScroll(true);
    //   }else{
    //     setScroll(false);
    //   }
    // });
  return (
    <header  className={`transition py-3   duration-500 w-full fixed  flex ${isScoll?'bg-white border-b-black border-b-0 shadow-xl':'bg-transparent'} z-50 justify-center items-center`}>
      <nav data-aos="fade-down" className='w-11/12  flex justify-between'>
          <div>
           <a href="/">
           <img src={logo} className=' object-contain' width="60px" height="60px" alt="img" />
            </a>
           </div>
           <div className='hidden lg:flex items-center'>
              <ul className='flex gap-10 w-full items-center justify-between list-none'>
                {
                  Navobj.navitems.map((item,idx)=>{
                    console.log(isactive===idx);
                    return(
                      <Link href={item.link} className=' text-nav' key={idx} onClick={()=>{setisactive(idx)}} ><li className={`text-lg transition ${isactive===idx?'text-nav:':'text-black'}  duration-500 hover:text-nav font-semibold`}>{item.name}</li></Link>
                    )
                  })
                }
                <button className='py-4 px-6 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-black text-white'><a href={Navobj.navbutton.link}>{Navobj.navbutton.name}</a></button>
              </ul>
           </div>
           <div className='lg:hidden'>
              <div>
                
              </div>
           </div>
      </nav>
    </header>
  )
}

export default Navbar