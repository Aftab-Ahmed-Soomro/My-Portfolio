import React from 'react'
import Banner1 from '../Components/About1/Banner1'
import Banner2 from '../Components/Skills/Banner2'
import Banner3 from '../Components/About2/Banner3'
import Banner4 from '../Components/Projectss/Banner4'
import { Banner4items1, Banner4items2, Banner4items3 } from '../utils/constants/Banner4items'
import Banner5 from '../Components/Contact/Banner5'

const Home = () => {
  return (
    <div>
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <div className='bg-black pt-6 flex justify-center'>
        <h1 className='text-5xl font-normal text-white text-center bg-black pt-16 pb-4'>My <span className='font-extrabold'>Projects</span></h1>
      </div>
      <Banner4 data={Banner4items1} />
      <Banner4 isrotate data={Banner4items2} />
      <Banner4 data={Banner4items3} />
      <Banner5 />
    </div>
  )
}

export default Home
