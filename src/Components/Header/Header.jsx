import React from 'react'
import Button from '../Common/Button/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around items-center p-7'>
        <div className='flex items-center gap-2'>
            <img src="./Assets/imgs/header logo.png" alt="" />
            <h1 className='font-bold text-xl'>Portfolio</h1>
        </div>  
        <div>
            <img className='sm:flex md:hidden' src="./Assets/imgs/Vector.png" alt="" />
            <ul className='flex gap-6 font-semibold text-xl xsm:hidden md:flex'>
                <li>
                    <NavLink to='home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='about'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink to='projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='contact'>Contact me</NavLink>
                </li>
            </ul>
        </div>
        <div className='xsm:hidden md:flex'>
            <Button />
        </div>
    </div>
  )
}

export default Header
