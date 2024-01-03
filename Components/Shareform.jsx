'use client'
import { useState } from 'react'
import React from 'react'
const Shareform = () => {
  const [story,setstory]=useState({
    name:"",
    age:"",
    dd:"",
    life:"",
    support:"",
    lesson:""
  })

  const hadelsubmit=(e)=>{
    e.preventDefault();
    console.log(story);
  }
  return (
    <section className="mt-24 py-10 w-11/12">
    <div className="flex flex-col items-center lg:flex-row w-full">
        <div className="img w-11/12 lg:w-1/2">in</div>
         <form className=' w-11/12 lg:w-1/2 flex flex-col gap-2' >
            <div className="flex w-full gap-2">
            <input type="text" className='w-1/2 px-1 outline-none border-2 rounded-md border-pink-400' placeholder='Name' onChange={(e)=>{
                setstory({...story,name:e.target.value})
            }}/>
            <input type="text" onChange={(e)=>{
                setstory({...story,age:e.target.value})
            }}  className='w-1/2 px-1 outline-none border-2 rounded-md border-pink-400' placeholder='age'/>
            </div>
           <textarea name="" onChange={(e)=>{
                setstory({...story,dd:e.target.value})
            }} id="" cols="30" rows="3" className=' w-full px-1 outline-none border-2 rounded-md border-pink-400 resize-none' placeholder='Detailed Diagnosis'></textarea>
           <textarea name="" onChange={(e)=>{
                setstory({...story,life:e.target.value})
            }} id="" cols="30" rows="3" className=' w-full px-1 outline-none border-2 rounded-md border-pink-400 resize-none' placeholder='Detailed Diagnosis'></textarea>
           <textarea name="" onChange={(e)=>{
                setstory({...story,support:e.target.value})
            }} id="" cols="30" rows="3" className=' w-full px-1 outline-none border-2 rounded-md border-pink-400 resize-none' placeholder='Detailed Diagnosis'></textarea>
           <textarea name="" onChange={(e)=>{
                setstory({...story,lesson:e.target.value})
            }} id="" cols="30" rows="3" className=' w-full px-1 outline-none border-2 rounded-md border-pink-400 resize-none' placeholder='Detailed Diagnosis'></textarea>
            <button onClick={hadelsubmit} type="submit" className='w-full px-1 outline-none border-2 rounded-md border-pink-400 py-2'>Submit</button>
        </form>
    </div>
    </section>
  )
}

export default Shareform