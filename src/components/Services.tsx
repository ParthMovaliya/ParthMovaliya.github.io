import React from 'react'
import { BiCheck } from "react-icons/bi"
import "../styles/services.css"

const Services = () => {
    return (
        <div id='services' className='pt-[5.5rem] container_height'>
            <div className="flex flex-col items-center mb-5">
                <h5 className='text-sm'>What I Offer</h5>
                <h2 className='text-2xl font-bold blue_gradient'>Services</h2>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <article className="experience_Container">
                    <div className="mb-4 font-semibold orange_gradient">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">UI Design.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">UX Design.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Template Designing.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Banner Designing.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Logo Designing.</p>
                        </li>
                    </ul>
                </article>

                <article className="experience_Container">
                    <div className="mb-4 font-semibold orange_gradient">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Single page Website(HTML/CSS/Js).</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Multiple page Website(HTML/CSS/Js).</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">React Js single page Website.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">React Js multiple page Website.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Next Js single page Website.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Next Js multiple page Website.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Fullstack Website.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Backend Connectivity.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Website Management.</p>
                        </li>
                    </ul>
                </article>

                <article className="experience_Container">
                    <div className="mb-4 font-semibold orange_gradient">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Social Media Management.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Blog Management.</p>
                        </li>
                        <li>
                            <BiCheck className='mt-[2px]' />
                            <p className="text-sm">Content Writing.</p>
                        </li>
                        {/* <li>
              <BiCheck className='mt-[2px]'/>
              className="text-sm" <p>.</p>
            </li>
            <li>
              <BiCheck className='mt-[2px]'/>
              className="text-sm" <p>.</p>
            </li> */}
                    </ul>
                </article>

            </div>
        </div>
    )
}

export default Services