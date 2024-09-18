import React from 'react'

const Banner5 = () => {
  return (
    <div>
        <div className='py-[60px] px-[80px]'>
            <div className='px-[32px] gap-10 flex flex-col items-center justify-center'>
                <h1 className='md:text-5xl xsm:text-xl sm:text-2xl font-normal pt-10 pb-2'>Contact <span className='font-extrabold'>Me</span></h1>
                <p className='font-normal text-zinc-500 text-base md:w-[500px] xsm:w-[200px] text-center'>I'm Aftab Ahmed Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>  
                <a href='https://mail.google.com/mail/u/0/#inbox' className='md:text-base xsm:text-xs' target='_blank'><i class="fa-regular fa-envelope me-2"></i>aftab.ahmedsoomrokhan@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Banner5
