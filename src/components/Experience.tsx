import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <div id='experience' className='pt-[5.5rem] container_height'>
      <div className="flex flex-col items-center mb-5">
        <h5 className='text-sm'>What Skill I Have</h5>
        <h2 className='text-2xl font-bold blue_gradient'>My Experience</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="experience_Container">
          <h3 className='text-center mb-8 text-[20px] green_gradient font-semibold'>Frontend Development</h3>
          <div className="grid grid-cols-2 gap-y-8">
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>React Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Next Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_Container">
          <h3 className='text-center mb-8 text-[20px] green_gradient font-semibold'>Backend Development</h3>
          <div className="grid grid-cols-2 gap-y-8">
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Express Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>MongoDb</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> */}
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='mt-[6px] text-blue-500' />
              <div>
                <h4 className='font-semibold'>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience