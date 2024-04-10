import React, { useEffect } from "react";
import Carousel from "./Carousel"
import { SiBootstrap, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript, SiGit, SiFirebase, SiAwsamplify } from 'react-icons/si';
import AOS from "aos";
import 'aos/dist/aos.css'
export default function Skillset() {
    useEffect(() => {
        AOS.init()
    }, [])

    const SkillsetData =
        [
            {
                skill: "1",
                skillLogo: <SiHtml5 size={50} />,
                skillName: "HTML"
            },
            {
                skill: "2",
                skillLogo: <SiCss3 size={50} />,
                skillName: "CSS"
            },
            {
                skill: "3",
                skillLogo: <SiJavascript size={50} />,
                skillName: "Javascript"
            },
            {
                skill: "4",
                skillLogo: <SiReact size={50} />,
                skillName: "React JS & React Native"
            },
            {
                skill: "5",
                skillLogo: <SiTailwindcss size={50} />,
                skillName: "Tailwind"
            },
            {
                skill: "6",
                skillLogo: <SiBootstrap size={50} />,
                skillName: "Bootstrap"
            },
            {
                skill: "7",
                skillLogo: <SiGit size={50} />,
                skillName: "Git"
            },
            {
                skill: "8",
                skillLogo: <SiAwsamplify size={50} />,
                skillName: "AWS Amplify"
            },
            {
                skill: "9",
                skillLogo: <SiFirebase size={50} />,
                skillName: "Firebase"
            },
        ]


    const skillsets = () => {
        return SkillsetData.map((skills, index) => {
            console.log(skills)
            // alert(JSON.stringify(project, null, 2))

            return (
                <ul key={index} className="flex flex-col items-center justify-start w-[10rem] h-[8rem]" data-aos="fade-up" data-aos-duration="900">
                    <li>{skills.skillLogo}</li>
                    <li>{skills.skillName}</li>
                </ul>
            )



        }
        )
    }

    return (
        <div className="font-pop overflow-hidden pt-10" id="skillset">
            <ul className="bg-gray-900 flex flex-col h-full min-h-screen text-gray-400 justify-center items-center p-4 text-center gap-4 max-w-4xl m-auto">
                <li className="text-[25px] md:text-[30px] lg:text-[40px] fontbold uppercase scroll-mt-10" data-aos="fade-up" data-aos-duration="900">
                    Skills & Experience
                </li>
                <li data-aos="fade-up" data-aos-duration="900">
                    My main area of expertise is front end development (client side of the web).
                </li>
                <li data-aos="fade-up" data-aos-duration="900">
                    I primarily use React JS along with Tailwind CSS for designing and building web applications and I use React native for building a cross-platform application for mobile devices.
                </li>
                <li className=" w-full flex flex-row flex-wrap items-center justify-center mt-10">
                    {skillsets()}
                </li>
            </ul>
        </div>
    )
}