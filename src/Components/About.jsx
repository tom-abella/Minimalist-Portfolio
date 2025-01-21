import React, { useEffect } from "react";
import photo from '../assets/photo.png'
import { Link } from 'react-scroll'
import AOS from "aos";
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="min-h-screen m-full bg-gray-900  flex p-11 text-4xl justify-center items-center text-gray-300 font-pop flex-col md:flex-row overflow-hidden relative text-center" id="about">
            <div className="background-image flex w-full h-full items-center justify-center ">
                <div className="w-full hidden lg:flex items-center justify-center pr-20 ">
                    <img src={photo} alt="" />
                </div>
            </div>
            <ul className=" flex gap-5 items-center lg:items-start justify-center lg:justify-around flex-col lg:flex-row w-full h-full ">
                <li className="h-full lg:w-[30rem] flex flex-col justify-center items-center">
                    <img src={photo} alt="" className=" w-[15rem] z-10 rounded-full lg:hidden" />
                    <p className="text-[20px] lg:text-[40px]" data-aos="fade-up" data-aos-duration="900">Hi! I'm Tom Leonard Abella</p>
                    <p className="text-xs md:text-base" data-aos="fade-up" data-aos-duration="900">Front End Developer / Software Developer / Mobile Developer</p>
                </li>
                <li className=" flex flex-col  lg:w-[30rem] text-base justify-center items-center lg:justify-start lg:items-start lg:text-start gap-2">
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Eager to learn and wants to turn ideas into realities.</p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Problem solver, well-organised person, high attention to detail.
                        Fan of hiking, travels, music and musical instruments, video games, and coding of course. </p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Interested in creating an awesome and responsive project, exploring new things, and working on ambitious projects with interesting people.</p>
                </li>

            </ul>
        </div>
    )
}