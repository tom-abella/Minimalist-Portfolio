import React, { useEffect } from "react";
import alternative from "../assets/alternative.png"
import cardBank from "../assets/cardBank.png"
import firstPortfolio from "../assets/firstPortfolio.png"
import businessCard from "../assets/businessCard.png"
import travelJournal from "../assets/travelJournal.png"
import secondPortfolio from "../assets/secondPortfolio.png"
import ddcMain from "../assets/ddcMain.png"
import ddcAdmin from "../assets/ddcAdmin.png"
import {BsGlobe, BsCodeSlash} from 'react-icons/bs';
import { SiReact, SiTailwindcss, SiBootstrap, SiFirebase} from 'react-icons/si';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Project() {
useEffect(()=>{
  AOS.init()
},[])
    return (
      <div className="bg-gray-900 h-full w-full font-pop px-4 overflow-hidden " id="project">
        <div className="flex justify-center items-center flex-col py-10">
        <p className="text-gray-300 p-4 border-b-2 mb-10 border-gray-200 text-4xl">Project</p>
          {/* Project 1*/}
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap ">
            <div className="w-96 h-115 p-3 border-2 rounded-lg border-gray-500 m-3" data-aos="fade-up" data-aos-duration="300">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={alternative} alt="Alternative Learning Platform" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://tom-abella.github.io/Alternative-Education-Platform/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">alternative learning platform</p>
                    <a href="https://github.com/tom-abella/Alternative-Education-Platform" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                <li className="flex flex-row justify-center items-center gap-2 ">
                  <p>Stack:</p><SiBootstrap size={20} className="text-purple-400"/>
                  </li>
                <li>An alternative learning platform web page that uses infographics as a medium</li>
              </ul>
            </div>
            {/* Project 2*/}
            <div className="w-96 h-115 p-3 border-2 rounded-lg border-gray-500 m-3" data-aos="fade-up" data-aos-duration="400">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={cardBank} alt="Card Bank" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://card-bank-92vryqdox-tom-abella.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">card bank</p>
                    <a href="https://github.com/tom-abella/Card_Bank" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                <li className="flex flex-row justify-center items-center gap-2 ">
                  <p>Stack:</p><SiBootstrap size={20} className="text-purple-400"/>
                  </li>
                <li>A Card Bank Inc. webpage that shows information about themselves such as mission, vision, and what they do. </li>
              </ul>
            </div>
            {/* Project 3*/}
            <div className="w-96 h-115 p-3 border-2 rounded-lg border-gray-500 m-3" data-aos="fade-up" data-aos-duration="500">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={firstPortfolio} alt="old portfolio" className="rounded-lg" /></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://tom-abella.github.io/Portfolio/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">Portfolio</p>
                    <a href="https://github.com/tom-abella/tom-abella.github.io/tree/main/Portfolio" target={"_blank"}className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                <li className="flex flex-row justify-center items-center gap-2 ">
                  <p>Stack:</p><SiBootstrap size={20} className="text-purple-400"/>
                  </li>
                <li>My previous portfolio that shows information about myself such as social media links, skills, and projects.</li>
              </ul>
            </div>
            {/* Project 4*/}
            <div className="w-96 h-115 p-3 border-2 rounded-lg border-gray-500 m-3" data-aos="fade-up" data-aos-duration="600">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={businessCard} alt="business card" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://tomleonard-digital-business-card.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">business card</p>
                    <a href="https://github.com/tom-abella/Digital-Business-Card" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                <li className="flex flex-row justify-center items-center gap-2 ">
                  <p>Stack:</p> <SiReact size={20} className="text-blue-300"/><SiBootstrap size={20} className="text-purple-400"/>
                  </li>
                <li>My Digital Business Card which includes my social media accounts, portfolio links, about, and interest.</li>
              </ul>
            </div>
            {/* Project 5*/}
            <div className="w-96 h-115 p-3 border-2 rounded-lg border-gray-500 m-3" data-aos="fade-up" data-aos-duration="700">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li ><img src={travelJournal} alt="travel journal" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://tomleonard-travel-journal.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">travel journal</p>
                    <a href="https://github.com/tom-abella/travel-journal" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                <li className="flex flex-row justify-center items-center gap-2 " >
                  <p>Stack:</p> <SiReact size={20} className="text-blue-300"/><SiBootstrap size={20} className="text-purple-400"/>
                  </li>
                <li>My travel journal showcases some of my adventure and places that I've visited.</li>
              </ul>
            </div>
            {/* Project 6*/}
            <div className="w-96 h-115 border-2 rounded-lg border-gray-500 m-3 px-3 py-4" data-aos="fade-up" data-aos-duration="800">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={secondPortfolio} alt="Portfolio" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://tomleonard-abella.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">portfolio</p>
                    <a href="https://github.com/tom-abella/Minimalist-Portfolio" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                  <li className="flex flex-row justify-center items-center gap-2 "><p>Stack:</p> <SiReact size={20} className="text-blue-300"/><SiTailwindcss size={20} className="text-blue-400"/>
                  </li>
                <li className="">My current portfolio that shows information about myself such as social media links, skills, and projects.</li>
              </ul>
            </div>
            {/* Project 7*/}
            <div className="w-96 h-115 border-2 rounded-lg border-gray-200 m-3 px-3 py-2 hover:bg-gray-200 hover:" data-aos="fade-up" data-aos-duration="900">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={ddcMain} alt="ddcMain" className="rounded-xl"/></li>
                <li className="flex justify-evenly items-cente">
                    <a href="https://donesdentalclinic.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">Dental clinic</p>
                    <a href="https://github.com/tom-abella/dental-clinic-scheduler" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                  <li className="flex flex-row justify-center items-center gap-2 "><p>Stack:</p> <SiReact size={20} className="text-blue-300"/><SiTailwindcss size={20} className="text-blue-400"/> <SiFirebase size={20} className="text-orange-500"/>
                  </li>
                <li className="">a webpage that shows information about a dental clinic and a has form that will make the user to book online.</li>
              </ul>
            </div>
            {/* Project 8*/}
            <div className="w-96 h-115 border-2 rounded-lg border-gray-500 m-3 px-3 py-4" data-aos="fade-up" data-aos-duration="1000">
              <ul className="text-gray-300 flex flex-col gap-3">
                <li><img src={ddcAdmin} alt="ddcAdmin" className="rounded-lg"/></li>
                <li className="flex justify-evenly items-center">
                    <a href="https://ddc-admin.vercel.app/" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsGlobe size={30}/></a>
                    <p className="text-center text-xl uppercase font-bold">dental clinic admin</p>
                    <a href="https://github.com/tom-abella/Minimalist-Portfolio" target={"_blank"} className="py-1 rounded-lg px-4 hover:text-gray-300 text-gray-600"><BsCodeSlash size={30}/></a>
                </li>
                  <li className="flex flex-row justify-center items-center gap-2"><p>Stack:</p> <SiReact size={20} className="text-blue-300"/><SiTailwindcss size={20} className="text-blue-400"/><SiFirebase size={20} className="text-orange-500"/>
                  </li>
                <li className="">Dental clinic admin shows the completed clients and who book online. It also shows who are the authorized user to login</li>
              </ul>
            </div>
            </div>
        </div>
      </div>
    )
  }