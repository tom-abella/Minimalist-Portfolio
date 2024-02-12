import React, { useEffect } from "react";
import photo from '../assets/photo.png'
import { Link } from 'react-scroll'
import AOS from "aos";
import 'aos/dist/aos.css'
import CV from "../assets/CV/CV - Tom Leonard Abella.pdf"
export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="min-h-screen m-full bg-gray-900  flex p-11 text-4xl justify-center items-center text-gray-300 font-pop flex-col md:flex-row overflow-hidden relative text-center" id="about">
            <div className="background-image flex w-full h-full items-center justify-center ">
                <div className="w-full flex items-center justify-end pr-20">
                    <img src={photo} alt="" />
                </div>
            </div>
            <ul className=" flex gap-5 items-center lg:items-start justify-center lg:justify-start flex-col lg:flex-row w-full h-full ">
                <li className="h-full w-[30rem] flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Hi! I'm Tom Leonard Abella</p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Software Developer / Javascript Fan</p>
                </li>
                <li className=" flex flex-col w-[30rem] text-base justify-center items-center lg:justify-start lg:items-start lg:text-start gap-2">
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Problem solver, well-organised person, loyal employee with high attention to detail.
                        Fan of Boxing, outdoor activities, video games, and coding of course. </p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900"> Problem solver, well-organised person, loyal employee with high attention to detail.
                        Fan of Boxing, outdoor activities, video games, and coding of course.</p>
                </li>

            </ul>
        </div>
    )
}