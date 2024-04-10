import { Tooltip } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { Link } from 'react-scroll'
export default function Body() {


    return (

        <div className="font-pop" id="home">
            <div className="h-screen flex flex-col capitalize justify-center items-center  w-full text-gray-300">
                <p className=" uppercase text-3xl  lg:text-5xl" data-aos="fade-right" data-aos-duration="1000">Tom Leonard Abella</p>
                <p className="my-2 text-xs md:text-base lg:text-xl" data-aos="fade-right" data-aos-duration="300">Front End Developer / Software Developer / Mobile Developer</p>
                <ul className="flex justify-around" data-aos="fade-right" data-aos-duration="600">
                    <Tooltip content="Facebook" placement="bottom" className="bg-gray-300 text-gray-900">
                        <li><a href="https://www.facebook.com/tomleonard.abella/" target={"_blank"}><i className="fa fa-facebook fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    </Tooltip>
                    <Tooltip content="Instagram" placement="bottom" className="bg-gray-300 text-gray-900">
                        <li><a href="https://www.instagram.com/abella_tl/" target={"_blank"}><i className="fa fa-instagram fa-2x mx-2 p-2 hover:text-rose-500 cursor-pointer"></i></a></li>
                    </Tooltip>
                    <Tooltip content="Github" placement="bottom" className="bg-gray-300 text-gray-900">
                        <li><a href="https://github.com/tom-abella" target={"_blank"}><i className="fa fa-github fa-2x mx-2 p-2 hover:text-slate-400 cursor-pointer"></i></a></li>
                    </Tooltip>
                    <Tooltip content="LinkedIn" placement="bottom" className="bg-gray-300 text-gray-900">
                        <li><a href="https://www.linkedin.com/in/tom-leonard-abella" target={"_blank"}><i className="fa fa-linkedin fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    </Tooltip>
                    <Tooltip content="Email" placement="bottom" className="bg-gray-300 text-gray-900">
                        <li>

                            <Link to="contact" spy={true} smooth={true} duration={500} >
                                <button><i className="fa fa-envelope-o fa-2x mx-2 p-2 hover:text-slate-400 cursor-pointer" ></i></button>

                            </Link>
                        </li>
                    </Tooltip>
                </ul>

            </div>
        </div>
    )
}