import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
export default function Timeline(){

    useEffect(()=>{
        AOS.init({duration:2000})
        },[])

    return(
        <div className="h-full bg-gray-900 flex px-5 text-4xl justify-center items-center flex-col font-pop min-h-screen py-10 overflow-hidden" id="timeline">
            <p className="text-gray-300 p-3 border-b-2 mb-10 border-gray-200">Timeline</p>
            
    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        {/* <!-- Stack 1 --> */}
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


        {/* <!-- Stack 2 --> */}
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

        {/* <!-- Stack 3 --> */}
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

        {/* <!-- Stack 4 --> */}
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

         {/* <!-- Stack 5 --> */}
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

        {/* <!-- Stack 6--> */}
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
        
        
    </div>
        </div>
    )
}