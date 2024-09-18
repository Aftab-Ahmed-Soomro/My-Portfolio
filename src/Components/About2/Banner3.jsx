import React from 'react'

const Banner3 = () => {
  return (
    <div className='md:py-[60px] md:px-[80px]'>
    <div className='flex md:flex-row xsm:flex-col md:px-[32px] gap-10'>
      <div className='xsm:m-auto'>
        <img className='md:w-[485.45px] md:h-[522px] xsm:w-[336.21px] h-[366px]' src="./Assets/imgs/Group 1000015845.png" alt="" />
      </div>
      <div className='p-6 md:w-1/2 xsm:w-[351px] xsm:m-auto flex flex-col gap-6'>
        <h1 className='text-5xl font-normal'>About <span className='font-extrabold'>Me</span></h1>
        <p className='text-zinc-500'>Passionate Beginner Coder | Web & Mobile App Development Enthusiast. Currently pursuing a comprehensive course in Web & Mobile App Development at Saylani Mass IT Training, alongside my studies in BS Software Engineering at Karachi University (UBIT). Committed to honing my skills in programming and eager to contribute to innovative projects. Seeking opportunities to apply my knowledge and grow in the tech industry.</p>
      </div>
    </div>
    </div>
  )
}

export default Banner3
