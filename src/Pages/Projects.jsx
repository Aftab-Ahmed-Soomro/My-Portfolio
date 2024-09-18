import React from 'react'
import Banner4 from '../Components/Projectss/Banner4'
import { Banner4items1, Banner4items2, Banner4items3 } from '../utils/constants/Banner4items'

const Projects = () => {
  return (
    <div>
      <div className='bg-black pt-6'>
        <h1 className='text-5xl font-normal text-white text-center bg-black pt-16 pb-4'>My <span className='font-extrabold'>Projects</span></h1>
      </div>
      <Banner4 data={Banner4items1}/>
      <Banner4 isrotate data={Banner4items2}/>
      <Banner4 data={Banner4items3}/>
    </div>
  )
}

export default Projects
