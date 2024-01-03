"use client"
import { useEffect, useState } from "react"
import { Navobj, logo, logo2 } from "../Data";
import { downicon } from "../Data";
import { mediaicons } from "../Data";
import Image from "next/image";
// import img from '../Assets/2150797600.png'

const Hero = () => {
  const data = {
    greet: "Together, We Fight Against Breast Cancer.",
    designations: ["", "United in Pink, Stronger in Action", "Empowering Lives, Erasing Breast Cancer"],
    clginfo:"Join our community and make a difference by sharing your personal breast cancer journey. Your unique experience can inspire, comfort, and empower others facing similar challenges Whether you're a survivor, a caregiver, or an advocate, your story matters. By contributing, you become a source of strength for those in need and help foster a supportive network. Together, let's break the silence surrounding breast cancer and create a space where stories unite us in the fight against this disease",
    links:{
      github:"https://github.com/siddak18",
      insta:"https://www.instagram.com/siddakrajpal/",
      linkedin:"https://www.linkedin.com/in/siddak-rajpal-21b32b233/",
      facebook:"https://www.instagram.com/siddakrajpal/",
      twitter:"https://leetcode.com/siddakrajpal/"
    }
  };
  
  const [designationIndex, setDesignationIndex] = useState(0);
  const currentDesignation = data.designations[designationIndex];
  const [displayedDesignation, setDisplayedDesignation] = useState("");
  const [excla,setexcla]=useState(true);
  useEffect(() => {
    if (displayedDesignation !== currentDesignation) {
      const timeout = setTimeout(() => {
        setDisplayedDesignation(
          currentDesignation.substring(0, displayedDesignation.length + 1)
        );
      }, 100); 
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDesignationIndex((designationIndex + 1) % data.designations.length);
        setDisplayedDesignation("");
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [displayedDesignation, designationIndex, currentDesignation]);
  

  useEffect(()=>{
      const exclamation=()=>{
        setexcla(!excla);
      }
      const interval=setInterval(exclamation,800);
      return ()=>{
        clearInterval(interval);
      }
  },[excla]);
  
  return (
    <section className=' pt-10 h-max w-full  lg:h-screen bg-gradient-to-r pb-5 flex items-center justify-center'>
      <div id="home" className="w-11/12 lg:flex-row flex-col-reverse flex gap-3 items-center mt-12">
        <div className=" w-full  md:w-2/3 flex flex-col items-center lg:items-start">
           <p data-aos="fade-up" className=" h-max  sm:text-3xl sm:mt-3 xsm:text-3xl lg:text-5xl text-q 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl   font-bold font-custom">{data.greet}</p>
           <p data-aos="fade-up" className=" sm:text-3xl sm:mt-3 xsm:text-3xl lg:text-3xl text-s 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl h-6 mt-1 md:mt-5 text-nav font-bold flex items-center gap-1">{displayedDesignation} <span className={`h-7 w-1 bg-nav ${excla?'flex':'hidden'}`}></span></p>
           <p data-aos="" className=" h-max text-xs px-2 sm:mt-3 lg:mt-5 lg:px-0  2xl:text-xl 3xl:text-2xl 4xl:text-3xl mt-1 text-justify font-medium  text-slate-600">{data.clginfo}</p>   
           <div data-aos="fade-down" className="mt-5 flex-col flex gap-2 lg:flex-row 2xl:mt-8">
           <button className='py-3 w-max px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold rounded-lg h-10 bg-black text-white'><a href={Navobj.navbutton.link}>{Navobj.navbutton.name}</a></button>
           <button className='py-3 border-1 border-black rounded-lg px-8 flex justify-center text-lg hover:text-nav transition duration-500 items-center font-semibold  h-10 bg-white text-black '><a className="flex align-middle gap-1" href="https://www.linkedin.com/in/siddak-rajpal-21b32b233/overlay/1635540070258/single-media-viewer/?type=DOCUMENT&profileId=ACoAADo_QXcB3V8ntaIheLinoLdIwF9qY-luAtc" download><p>About Cancer</p></a></button>
           </div>
           {/* <div data-aos="fade-down" className="mt-5 transition duration-1000">
            <ul className="flex gap-5">
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.github}>{mediaicons.github}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.insta}>{mediaicons.instaicon}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.linkedin}>{mediaicons.linkdinicon}</a></li>
              <li className="hover:scale-125 transition duration-1000"><a href={data.links.twitter}>{mediaicons.twittericon}</a></li>
            </ul>
           </div> */}
        </div>
        <div className="lg:w-1/2 md:w-2/3 ">
            <img src={logo2} alt="logo" height='100%' width='100%' className=" object-contain"/>
        </div>
       </div>  
    </section>
  )
}

export default Hero