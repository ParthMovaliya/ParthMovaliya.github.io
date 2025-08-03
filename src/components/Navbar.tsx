"use client";

import React, { useState, useEffect } from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`sticky -top-4 z-20 ${scrolled ? "backdrop-blur border-b border-gray-300 bg-white/40 " : ""}`} >
      <div className="app">
        <nav className="flex py-5 mt-4 justify-between items-center">
          <div className="">
            <a href="#" className='' >
              <p className='font-satisfy text-4xl'>
                iGOD.pm
              </p>
            </a>
          </div>
          <div className=" text-xl font-inter hidden md:flex gap-4 lg:gap-6">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="text-lg font-inter flex md:hidden">
            <button onClick={() => setMenu((menu) => !menu)}>
              {menu ? "Close" : "Menu"}
            </button>
            {menu && <div className="dropdown">
              <a className='dropdown_link' href="#about" onClick={() => setMenu((menu) => !menu)}>About</a>
              <a className='dropdown_link' href="#experience" onClick={() => setMenu((menu) => !menu)}>Experience</a>
              <a className='dropdown_link' href="#services" onClick={() => setMenu((menu) => !menu)}>Services</a>
              <a className='dropdown_link' href="#contact" onClick={() => setMenu((menu) => !menu)}>Contact</a>
            </div>}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar