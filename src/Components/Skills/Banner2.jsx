import React from 'react'
import { Banner2items } from '../../utils/constants/Banner2items'

const Banner2 = () => {
  return (
    <div>
      <h1 className='text-5xl font-normal text-center mt-12 mb-8'>My <span className='font-extrabold'>Skills</span></h1>
      <div className='py-[60px] px-[80px]'>
      <div className='px-[32px] flex items-center gap-10 flex-wrap xsm:justify-center'>
        {
           Banner2items.map((item,index)=> {
            return (
                <div key={index} className='flex flex-col border-2 border-solid border-black p-5 gap-9 justify-center items-center'>
                    <i className={`text-4xl md:w-[130px] xsm:w-[180px] h-[24px] text-center ${item.icon}`}></i>
                    <h1>{item.text}</h1>
                </div>
            )
           }) 
        }
      </div>
      </div>
    </div>
  )
}

export default Banner2
