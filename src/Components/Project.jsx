import React, { useEffect } from "react";
import { BsGlobe, BsCodeSlash } from 'react-icons/bs';
import { SiReact, SiTailwindcss, SiBootstrap, SiFirebase } from 'react-icons/si';
import AOS from "aos";
import { data } from "../Projects/Project"
import 'aos/dist/aos.css'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Project() {
  useEffect(() => {
    AOS.init()
    // console.log("Project", data)

  }, [])

  const project = () => {
    return data.map((project, index) => {
      console.log(project)
      // alert(JSON.stringify(project, null, 2))

      return (
        <Card className="mt-6 w-[20rem] bg-gray-800" >
          <CardHeader color="gray-900" className="relative h-[10rem]">
            <img
              src={project.image}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography className="text-gray-400">
              {project.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button>Read More</Button>
            </a>
          </CardFooter>
        </Card>
      )



    }
    )
  }


  return (
    <div className="bg-gray-900 h-full w-full font-pop px-4 overflow-hidden " id="project">
      <div className="flex justify-center items-center flex-col py-10 ">
        <p className="text-gray-300 p-4 border-b-2 mb-10 border-gray-200 text-4xl">Project</p>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5">
          {project()}

          {/* <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card> */}

        </div>
      </div>
    </div>

  )
}