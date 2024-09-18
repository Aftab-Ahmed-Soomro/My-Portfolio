import React from 'react'

const Banner4 = ({data, isrotate}) => {
    const {imgUrl, heading, title, subTitle, hostLink} = data;
    console.log(data);
  return (
    <div className='bg-black'>
        <div className='py-[60px] md:px-[80px]'>
            <div className='px-[32px]'>
                <div className={`flex md:flex-row xsm:flex-col justify-center items-center pt-10 ${isrotate && 'md:flex-row-reverse'}`}>
                    <div className='md:w-1/2 xsm:m-auto'>
                        <a href={hostLink} target='_blank'><img className='md:h-[350px] md:w-[530px] xsm:w-[343px] xsm:h-[397.73px] rounded' src={imgUrl} alt="" /></a>
                    </div>
                    <div className='md:w-1/2 xsm:w-[343px] xsm:h-[168px] md:h-[265px] xsm:mb-28 xsm:m-auto p-8 flex flex-col gap-7'>
                        <h1 className='font-extrabold text-5xl text-white'>{heading}</h1>
                        <a href={hostLink} target='_blank'><h1 className='font-bold text-3xl text-white'>{title}</h1></a>
                        <p className='font-normal text-base text-zinc-500'>{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner4
