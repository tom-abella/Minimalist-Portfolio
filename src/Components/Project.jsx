import React, { useEffect } from "react";
import { BsGlobe, BsCodeSlash } from 'react-icons/bs';
import { SiReact, SiTailwindcss, SiBootstrap, SiFirebase } from 'react-icons/si';
import { SlGlobe } from "react-icons/sl";
import AOS from "aos";
import { project } from "../Data/Data"
import 'aos/dist/aos.css'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip
} from "@material-tailwind/react";

export default function Project() {
  useEffect(() => {
    AOS.init()
  }, [])

  const projects = () => {
    return project.map((projects, index) => {
      return (
        <Card className="mt-6 w-[20rem] bg-gray-800" data-aos="fade-up" data-aos-duration="900">
          <CardHeader color="gray-900" className="relative h-[10rem]">
            <img
              src={projects.image}
              alt="card-image"
              className="object-center object-cover h-full w-full"
            />
          </CardHeader>
          <CardBody>
            <Typography className="text-gray-400">
              {projects.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-gray-400 text-3xl flex items-center justify-between gap-5">
            <Tooltip content="Visit Repository" placement="top" className="bg-gray-300 text-gray-900">
              <a href={projects.repository} target="_blank" rel="noopener noreferrer">
                <BsCodeSlash />
              </a>
            </Tooltip>
            <Tooltip content="Visit Project" placement="top" className="bg-gray-300 text-gray-900">
              <a href={projects.link} target="_blank" rel="noopener noreferrer">
                <BsGlobe />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      )



    }
    )
  }


  return (
    <div className="bg-gray-900 h-full w-full min-w-screen font-pop px-4 pt-8 overflow-hidden" id="projects">
      <div className="flex justify-center items-center flex-col py-10">
        <p className="text-[25px] md:text-[30px] lg:text-[40px] fontbold uppercase mb-10 text-gray-300 scroll-mt-10" data-aos="fade-up" data-aos-duration="900">Projects</p>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5 ">
          {projects()}
        </div>
      </div>
    </div>

  )
}