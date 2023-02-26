import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
export default function Body(){
    return(

        <div className="font-pop" id="home">
            <div className="h-screen flex flex-col capitalize justify-center items-center  w-full text-gray-300">
                <p className=" uppercase text-3xl  md:text-5xl lg:text-5xl" data-aos="fade-right" data-aos-duration="1000">Tom Leonard Abella</p>
                <p className="my-2" data-aos="fade-right" data-aos-duration="300">front end developer</p>
                <ul className="flex justify-around" data-aos="fade-right" data-aos-duration="600">
                    <li><a href="https://www.facebook.com/tomleonard.abella/" target={"_blank"}><i className="fa fa-facebook fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    <li><a href="https://www.instagram.com/abella_tl/" target={"_blank"}><i className="fa fa-instagram fa-2x mx-2 p-2 hover:text-rose-500 cursor-pointer"></i></a></li>
                    <li><a href="https://github.com/tom-abella" target={"_blank"}><i className="fa fa-github fa-2x mx-2 p-2 hover:text-slate-400 cursor-pointer"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tom-leonard-abella" target={"_blank"}><i className="fa fa-linkedin fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    <li><a href="mailto:tomleonardabella@gmail.com" target={"_blank"}><i className="fa fa-envelope-o fa-2x mx-2 p-2 hover:text-red-500 cursor-pointer"></i></a></li>
                </ul>
            </div>
        </div>
    )
}