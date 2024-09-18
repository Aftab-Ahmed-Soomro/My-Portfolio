import React from 'react'

const Button = () => {
  return (
    <div>
      <a href="./Assets/imgs/My Resume.jpg" target='_blank'><button className='bg-black text-white hover:bg-white hover:text-black border-2 border-solid border-black p-3 font-semibold text-xl rounded'>Resume</button></a>
      {/* <i class="fa-solid fa-download bg-black text-white ms-3"></i> */}
    </div>
  )
}

export default Button
