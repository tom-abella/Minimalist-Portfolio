import React, { useEffect } from "react";
import Carousel from "./Carousel"
import {SiBootstrap, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript, SiMysql, SiPython, SiArduino, SiCisco, SiAndroid, SiFirebase} from 'react-icons/si';
import { BsFillEyeFill } from 'react-icons/bs';
import codex from "./assets/codex.png"
import openWeaver from "./assets/openweaver.png"
import tup2 from "./assets/tup2.png"
import dict1 from "./assets/dict1.png"
import STI from "./assets/STI.png"
import dict2 from "./assets/dict2.png"
import dict4 from "./assets/dict4.png"
import freecodecamp1 from "./assets/freecodecamp.png"
import freecodecamp2 from "./assets/freecodecamp2.png"
import aws from "./assets/aws.png"
import dict3 from "./assets/dict3.png"
import stacktreck from "./assets/stacktreck.png"
import AOS from "aos";
import 'aos/dist/aos.css'
export default function Skillset(){
    useEffect(()=>{
        AOS.init({duration:2000})
        },[])

    const slides =[
        codex,
        openWeaver,
        tup2,
        dict1,
        dict2,
        dict3,
        dict4,
        STI,
        freecodecamp1,
        freecodecamp2,
        aws,
        stacktreck

    ]
    
    return(

        <div className="font-pop overflow-hidden" id="skillset">
            
            <div className="bg-gray-800 flex h-full min-h-screen text-gray-400 justify-evenly flex-wrap items-center p-4">
                <div className="h-128 w-128 bg-gray-900 rounded-2xl flex flex-col items-center p-4 my-4"  data-aos="fade-up" data-aos-duration="300">
                    <p className="uppercase text-xl font-bold border-b-2 border-gray-300 px-4 pb-2">Skillset</p>
                        <div className="flex flex-col justify-between w-full">
                            <p className="m-2 text-gray-400 uppercase mt-5">Programming Languages</p>
                            <div className="flex flex-row w-full h-full justify-center items-center mt-3">
                                {/* SKILL */}
                                <div className="flex justify-center items-center flex-col w-3/6">
                                        <div className="flex flex-col justify-center items-center ">
                                            <SiHtml5 size={35} className="hover:text-orange-500"/>
                                            <p className="text-xs">HTML5</p>
                                        </div>
                                        <div className="flex flex-col mt-5 justify-center items-center">
                                        <SiCss3 size={35} className="hover:text-blue-400"/>
                                            <p className="text-xs">CSS3</p>
                                        </div>
                                </div>
                                
                                <div className="flex justify-center items-center flex-col w-3/6">
                                    <div className="flex flex-col justify-center items-center  ">
                                        <SiMysql size={40} className="hover:text-gray-400"/>
                                        <p className="text-xs">PHP MySql</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center mt-5">
                                    <SiPython size={35} className="hover:text-yellow-400"/>
                                    <p className="text-xs">Python</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center flex-row w-3/6">
                                    <div className="flex flex-col justify-center items-center  ">
                                        <SiJavascript size={40} className="hover:text-yellow-400"/>
                                        <p className="text-xs">JavaScript ES6+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full mt-5">
                            <p className="m-2 text-gray-400 uppercase">Frameworks / Libraries</p>
                            <div className="flex flex-row w-full h-full justify-center items-center mt-3">
                                    <div className="flex flex-col justify-center items-center w-2/6">
                                        <SiBootstrap size={35} className="hover:text-purple-500"/>
                                        <p className="text-xs">Bootstrap</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-2/6">
                                        <SiTailwindcss size={35} className="hover:text-blue-400"/>
                                        <p className="text-xs">Tailwind</p>
                                </div>
                                <div className="flex flex-col justify-center items-center w-2/6">
                                    <SiReact size={35} className="hover:text-blue-400"/>
                                    <p className="text-xs">React</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full mt-5">
                            <p className="m-2 text-gray-400 uppercase ">Others</p>
                            <div className="flex flex-row justify-center items-center mt-">
                                    <div className="flex flex-col justify-center items-center w-3/6">
                                        <SiArduino size={35} className="hover:text-green-700"/>
                                        <p className="text-xs">Arduino</p>
                                    </div>
                                    
                                    <div className="flex flex-col justify-center items-center w-3/6">
                                        <SiCisco size={35} className="hover:text-blue-600"/>
                                        <p className="text-xs">Networking</p>
                                    </div>
                            </div>
                                <div className="flex justify-center items-center mt-4">
                                    <div className="flex flex-col justify-center items-center w-3/6">
                                        <SiAndroid size={35} className="hover:text-green-300"/>
                                        <p className="text-xs">Android Studio</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-3/6">
                                        <SiFirebase size={35} className="hover:text-orange-300"/>
                                        <p className="text-xs">Firebase</p>
                                    </div>
                                </div>
                                
                            
                        </div>
                        
                </div>
                
                <div className=" h-115 sm:h-128 w-128 bg-gray-700 rounded-2xl sm:my-0 px-3 py-4 bg-gray-900 my-4"  data-aos="fade-up" data-aos-duration="400">
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/u/1/folders/16WC85kOvbFFJsSF_94SS7W3iBrrsGbEE" target={"_blank"} className="text-base hover:bg-gray-700 rounded-lg px-4 py-2 mb-2 border-2 border-gray-00"><i className="fa fa-eye mr-2"></i>View Certificates</a>
                    </div>
                    <div className="w-full z-0">
                    <Carousel autoSlide={true} autoSlideInterval={5000}> 
                    {slides.map((s) => (
                        <img src={s} />
                        ))}
                </Carousel>
                    </div>

                </div>
               
            </div>
        </div>
    )
}