import React from 'react'
import './Banner1.css'

const Banner1 = () => {
  return (
    <div className='py-[60px] px-[80px]'>
    <div className='flex md:flex-row xsm:flex-col-reverse justify-between items-center px-[32px]'>
      <div className='md:w-1/2 xsm:w-[351px] xsm:ms-10 md:ms-0 md:mt-4'>
        <h1 className='font-normal text-4xl lh mb-5'>Hello I'm <span className='font-extrabold'>Aftab Ahmed. Frontend Developer</span><br/>Based In <span className='font-extrabold'>Pakistan.</span></h1>
        <span className='font-xs text-zinc-500'>I'm Aftab Ahmed Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</span>
        <div>
            <div className='flex gap-2 mt-8'>
                <a href="https://www.linkedin.com/in/aftab-ahmed-12b9aa265/" target='_blank'><i class="fa-brands fa-linkedin bg-black text-white p-[16px] rounded border-2 border-solid border-black"></i></a>
                <a href="https://github.com/Aftab-Ahmed-Soomro" target='_blank'><i class="fa-brands fa-github bg-white text-black p-[16px] rounded border-2 border-solid border-black"></i></a>
            </div>
        </div>
      </div>
      <div className='md:w-1/2 xsm:w-[360px] xsm:h-[300px] md:h-[300px] xsm:me-8 md:me-0'>
        <img className='' src="./Assets/imgs/Frame 20.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Banner1
