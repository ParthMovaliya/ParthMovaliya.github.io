"use client";

import "./globals.css";
import Loader from "@/components/Loader";
import { useState } from 'react'
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import { motion, AnimatePresence } from "framer-motion"
import Landing from "@/components/Landing";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <div className="" key="loader">
          <Loader setLoading={setLoading} />
        </div>
      ) : (
        <div className="">
          <Navbar />
          <div className="app">
            <Landing />
            {/* {!loading && (
              <div className=''>
                <motion.img
                  transition={{ ease: 'easeInOut', duration: 1.6 }}
                  src={`/images/image-2.jpg`}
                  layoutId='main-image-1'
                />
              </div>
            )} */}
            {/* <AboutMe /> */}
            <div id='about' className='pt-[5.5rem] container_height'>
              <div className="flex items-center mb-8 flex-col">
                <h5 className='text-sm'>Get To Know</h5>
                <h2 className='text-2xl font-bold blue_gradient'>About Me</h2>
              </div>

              <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                <div className="flex justify-center lg:justify-normal">
                  {/* <Image className='w-9/12 md:w-1/2 lg:w-9/12 object-cover' height={1000} width={1000} src="/../public/images/my.jpg" alt="Me" /> */}
                  {!loading && (
                    <div className=' mx-auto w-full md:w-1/2 lg:w-10/12'>
                      <motion.img
                        // className="max-w-xl"
                        transition={{ ease: 'easeInOut', duration: 1.6 }}
                        // src="../../images/image-2.JPG"
                        src="../../images/my_2.jpg"
                        layoutId='main-image-2'
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                    <article className='experience_Container'>
                      <FaAward className='mx-auto text-2xl' />
                      <div className="text-center mt-4">
                        <h5 className='text-sm'>Experience</h5>
                        <small className='text-lg'>2+ Year</small>
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
                    I am a Computer Engineer with 2 year of professional experience in full-stack web development. I graduated in 2024 with a B.Tech in Computer Science Engineering from Leelaben Dashrathbhai Ramdas Patel Institute of Technology and Research (LDRP-ITR). I have strong expertise in building responsive, user-friendly web applications using technologies like React, Angular, Node.js, and Java. I'm passionate about clean code, scalable architecture, and continuous learning.
                  </p>
                  <a href="#contact" className='lets-talk-btn w-24 text-center'>Let's Talk</a>
                </div>
              </div>
            </div>
            <Experience />
            <Services />
            <ContactMe />
          </div>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
