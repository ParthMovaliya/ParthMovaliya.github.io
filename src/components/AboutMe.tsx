import Image from 'next/image'
import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const AboutMe = () => {
  return (
    <div id='about' className='pt-[5.5rem] container_height'>
      <div className="flex items-center mb-8 flex-col">
        <h5 className='text-sm'>Get To Know</h5>
        <h2 className='text-2xl font-bold blue_gradient'>About Me</h2>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-normal">
          <Image className='w-9/12 md:w-1/2 lg:w-9/12 object-cover' height={1000} width={1000} src="/../public/images/image-2.jpg" alt="Me" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <article className='experience_Container'>
              <FaAward className='mx-auto text-2xl' />
              <div className="text-center mt-4">
                <h5 className='text-sm'>Experience</h5>
                <small className='text-lg'>Fresher</small>
              </div>
            </article>
            <article className='experience_Container'>
              <FiUsers className='mx-auto text-2xl' />
              <div className="text-center mt-4">
                <h5 className='text-sm'>Clients</h5>
                <small className='text-lg'>2+ Worldwide</small>
              </div>
            </article>
            <article className='experience_Container'>
              <VscFolderLibrary className='mx-auto text-2xl' />
              <div className="text-center mt-4">
                <h5 className='text-sm'>Projects</h5>
                <small className='text-lg'>7 Completed</small>
              </div>
            </article>
          </div>
          <p>
            I am currently pursuing my B.Tech in Computer Science Engineering from Leelaben Dashrathbhai Ramdas Patel Institute Of Technology And Research (LDRP-ITR).I have completed Full Stack Web Development Program from The Complete 2022 Web Development Bootcamp by Dr. Angela Yu from Udemy(Online), I will graduate in 2024. I have Completed my SSC & HSC from Gujarat State Board in 2018 & 2020 respectively.
          </p>
          <a href="#contact" className='lets-talk-btn w-24 text-center'>Let's Talk</a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe