import React, { useEffect } from "react";
import photo from './assets/Picture.jpg'
import {Link} from 'react-scroll'
import AOS from "aos";
import 'aos/dist/aos.css'
import CV from "./assets/CV/CV - Abella, Tom Leonard.pdf"
export default function About(){
    useEffect(()=>{
        AOS.init()
      },[])
    return(
        <div className="min-h-screen m-full bg-gray-800  flex p-11 text-4xl justify-center items-center text-gray-300 font-pop flex-col md:flex-row overflow-hidden" id="about">
            <div className="w-5/12 md:w-4/12 mt-3 mb-0 md:h-full flex justify-center items-center text-base">
                <div className="w-100 border-4 border-gray-300 rounded-4xl opacity-75 hover:opacity-100 md:mr-10" data-aos="zoom-in" data-aos-duration="600">
                <Link to ="home"spy={true} smooth={true} duration={500}><img src={photo}/></Link>
                </div>
            </div>
            <div className="w-11/12 md:w-6/12  flex justify-center items-center flex-col">
            <p className="mt-6 md:mt-0 md:p-3 border-b-2 md:h-full md:ml-10 mb-5 md:px-10 border-gray-200 text-base uppercase">About</p>
                <p className="text-base" data-aos="fade-up" data-aos-duration="900">Hi! My name is Tom Leonard Abella and I'm a Computer Engineering Tech student at the Technological University of the Philippines. 
                </p>
                <p className="text-base mt-3" data-aos="fade-up" data-aos-duration="600">As an aspiring full-stack web developer, I am advancing my programming knowledge and skills through watching online tutorials, joining and participating in online sessions, boot camps, and online courses, and taking advantage of a range of other opportunities. Currently, I am specializing on Front-end programming that delivers responsive user interaction.</p>
                <div data-aos="fade-up" data-aos-duration="300">
                    <a href={CV} download className="text-base hover:bg-gray-700 rounded-lg px-4 py-2 mr-2"><i className="fa fa-download"></i> Download CV</a>
                   
                    <button className="text-base hover:bg-gray-700 rounded-lg px-4 py-2 uppercase" ><Link to ="skillset"spy={true} smooth={true} duration={500}><i className="fa fa-arrow-down mr-1"></i>Skills </Link></button>
                </div>
               
            </div>
        </div>
    )
}