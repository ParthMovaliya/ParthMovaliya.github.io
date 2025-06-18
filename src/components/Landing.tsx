"use client";

import Typewriter from 'typewriter-effect'
import HeaderSocials from './HeaderSocials';
import "../styles/home.css"
const Landing = () => {
  return (
    <div className="home-page flex flex-col items-center container_height">
      <HeaderSocials />
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      <div className="flex flex-col gap-2 items-center -translate-y-6">
        <div className='text-sm sm:text-xl'>Hello, I'm</div>
        <div className='my-name'>Parth Movaliya</div>
        <div className="text-lg sm:text-2xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Fullstack Developer", "Computer Engineer", "Website Developer"]
            }}
          />
        </div>

        <div className='py-5 flex gap-4 flex-col sm:flex-row'>
          <a href="../../public/Movaliya_Parth.pdf" download className='border rounded-md border-[#333333] px-2 py-2 hover:bg-[#333333] hover:text-white duration-300'>Download CV</a>
          <a href="#contact" className='lets-talk-btn text-center'>Let's talk</a>
        </div>
      </div>
    </div>
  )
}

export default Landing