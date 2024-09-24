import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='pt-[60px]'>
            <div className='md:px-[76px] xsm:px-[18px] gap-10 flex items-center justify-between bg-black'>
                <div className='flex items-center gap-2 p-8'>
                    <img src="./Assets/imgs/Group.png" alt="" />
                    <h1 className='font-bold text-xl text-white'>Portfolio</h1>
                </div>
                <div>
                    <p className='text-white font-semibold md:text-base'>Made In Figma</p>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Footer
