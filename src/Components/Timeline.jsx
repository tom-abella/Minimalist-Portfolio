import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { BellIcon, CurrencyDollarIcon, BuildingOfficeIcon, BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function ExperienceTimeline() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="h-full bg-gray-900 flex px-5 text-4xl justify-center items-center flex-col font-pop min-h-screen py-10 pt-20 overflow-hidden" id="timeline">
            {/* <p className="text-gray-300 p-3 border-b-2 mb-10 border-gray-200">Timeline</p> */}
            <p className="text-[25px] md:text-[30px] lg:text-[40px] fontbold uppercase mb-10 text-gray-300 scroll-mt-10" data-aos="fade-up" data-aos-duration="900">Timeline</p>
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-evenly items-center lg:items-start lg:gap-6">
                <div className="w-full md:w-[32rem] ">
                    <Timeline >
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <BriefcaseIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Software Developer</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Jul 2023 - Present</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-3">
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Work closely with development teams to ideate and create software solutions.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Participate in the design and creation of the company's mobile application project.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Retrieve data from APIs and use it in the user interface, enabling real-time data updates.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Develop and manage responsive and well-functioning websites.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Integrate APIs into mobile applications to enhance functionality and user experience.
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <AcademicCapIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Technological University of the Philippines</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Sep 2019 - Aug 2023</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-3">
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            College Graduate with a course of Bachelor of Engineering Tech major in Computer Engineering Tech (BET-CpET)
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector className="lg:hidden" />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <BriefcaseIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Full-Stack Developer Intern</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Apr 2023 - Jul 2023</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody>
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-8 lg:pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Work closely with development teams and IT head to ideate and create software solutions.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Participate in the design and creation of the company's mobile application project.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Develop and manage well-functioning databases and server-side components.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Develop and manage responsive and well-functioning websites.
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="w-full md:w-[32rem]">
                    <Timeline>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <AcademicCapIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Front End Lead</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Dec 2022 - Jun 2023</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-3">
                                <ul className="text-gray-200 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Implement and develop an interactive visual element for the user
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Develop of the organization and technological needs
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Ensure the technical feasibility of UI/UX designs
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <BriefcaseIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Technical Support</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Jan 2020 - Oct 2021</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-3">
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Encode the supplies for the Point of Sale with the use of Microsoft Excel
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Assist with the installation of solar panels and POS systems
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Assist them with social networking for their business
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <AcademicCapIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">STI College Caloocan</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Aug 2018 - May 2019</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody className="pb-8 pt-3">
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Senior High Graduate with a course of Information and Communication Technology major in Mobile App and Web Develepment (ICT-MAWD)
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Obtain TVL - Information & Communication Technology Computer Programming NC III - Java & .NET Technology
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem data-aos="fade-up" data-aos-duration="900">
                            <TimelineHeader>
                                <TimelineIcon className="p-2">
                                    <BriefcaseIcon className="h-4 w-4" />
                                </TimelineIcon>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-[22px] text-gray-400 leading-none">Encoder Intern</li>
                                    <li className=" text-[15px] text-gray-400 leading-none">Aug 2018 - May 2019</li>
                                </ul>
                            </TimelineHeader>
                            <TimelineBody>
                                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Encode mailing information in Microsoft Excel.s
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography color="gray" className="font-normal text-gray-500">
                                            Print and sort the encoded data.
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>


            {/* <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4"  data-aos="fade-up" data-aos-duration="500">
                <h1 className="text-white text-xl font-medium pt-2">Front-End Lead</h1>
                <p className="text-gray-400 text-xs pb-2">@ UX Society TUP Manila | 2022 - Present</p>
                    <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Implement and develop an interactive visual element for the user</li>
                        <li>Develop of the organization and technological needs</li>
                        <li>Ensure the technical feasibility of UI/UX designs</li>
                    </ul>
            </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center text-base"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
        </div>
        <div className="col-span-4 w-full h-full"></div>


        <div className="col-span-4 w-full h-full" ></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center  text-base"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
        </div>
        <div className="col-span-4 w-full h-full " data-aos="fade-up" data-aos-duration="600">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium pt-2">Static Website Freelance</h1>
                <p className="text-gray-400 text-xs pb-2">2021 - Present</p>
                    <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Implement a website based on the user design.</li>
                        <li>Develop a static website based from the user need</li>
                    </ul>
            </div>
        </div>

        <div className="col-span-4 w-full h-full " data-aos="fade-up" data-aos-duration="700">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium pt-2">Technical Support</h1>
                <p className="text-gray-400 text-xs pb-2">@ EbyteSolution, Occ. Mindoro | 2020 - 2021</p>
                    <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Encode the supplies for the Point of Sale with the use of Microsoft Excel</li>
                        <li>Assist with the installation of solar panels and POS systems</li>
                        <li>Assist them with social networking for their business</li>
                    </ul>
            </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center  text-base"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
        </div>

        <div className="col-span-4 w-full h-full"></div>
         <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center  text-base"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
        </div>
        <div className="col-span-4 w-full h-full" data-aos="fade-up" data-aos-duration="800">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4 ">
           
                    <h1 className="text-white text-xl font-medium pt-2">Technological University of the Philipines</h1>
                <p className="text-gray-400 text-xs pb-2">@ Ayala Boulevard, Ermita, Manila | 2019 - Present</p>
                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Taking the course of Bachelor of Engineering Technology major in Computer Engineering Technology (BET-CpET)</li>
                    </ul>
            </div>
        </div>

         <div className="col-span-4 w-full h-full "  data-aos="fade-up" data-aos-duration="900">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium pt-2">Encoder (Internship)</h1>
                <p className="text-gray-400 text-xs pb-2">@ Caloocan Postal Office, Caloocan City | 2019</p>
                <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Encode mail information using Microsoft Excel</li>
                        <li>Sorting postal packages</li>
                    </ul>
            </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center  text-base"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
        </div>

        <div className="col-span-4 w-full h-full"></div>
         <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center  text-base"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
        </div>
        <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4 " data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-white text-xl font-medium pt-2">STI College Caloocan</h1>
                <p className="text-gray-400 text-xs pb-2">@ 109 Samson Road corner Caimito Street, Caloocan City | 2018 - 2019</p>
                    <ul className="text-gray-100 text-sm list-disc pl-4 pb-2">
                        <li>Taking the strand of Information and Communication Technology major in Mobile App and Web Development (ICT-MAWD)</li>
                    </ul>
            </div>
        </div>
        
        
    </div> */}
        </div>
    )
}