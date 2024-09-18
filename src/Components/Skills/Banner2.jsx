import React from 'react'
import { Banner2items } from '../../utils/constants/Banner2items'
import { SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Banner2 = () => {
  return (
    <div>
      <h1 className='text-5xl font-normal text-center mt-12 mb-8'>My <span className='font-extrabold'>Skills</span></h1>
      <div className='py-[60px] px-[80px]'>
      <div className='px-[32px] flex items-center gap-10 flex-wrap xsm:justify-center'>
        {
           Banner2items.map((item,index)=> {
            return (
                <div key={index} className='flex flex-col border-2 border-solid border-black p-5 gap-9 justify-center items-center hover:bg-black hover:text-white'>
                    <i className={`text-4xl md:w-[130px] xsm:w-[180px] h-[24px] text-center ${item.icon}`}></i>
                    <h1>{item.text}</h1>
                </div>
            )
           }) 
        }
        <div className='flex flex-col border-2 border-solid border-black p-5 gap-6 justify-center items-center hover:bg-black hover:text-white'>
          <RiTailwindCssFill className='md:w-[130px] xsm:w-[180px] h-[35px] text-center'/>
          <h1>Tailwindcss</h1>
        </div>
        <div className='flex flex-col border-2 border-solid border-black p-5 gap-6 justify-center items-center hover:bg-black hover:text-white'>
          <SiFirebase className='md:w-[130px] xsm:w-[180px] h-[35px] text-center'/>
          <h1>Firebase</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner2
