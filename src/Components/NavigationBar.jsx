import React from "react"
import '../index.css'
// import {Link} from 'react-router-dom'
import {Link} from 'react-scroll'
export default function NavigationBar(){

    return(
        <div className="sticky top-0 z-40 py-2 uppercase font-medium text-gray-300 bg-gray-900">
            <div className="flex justify-around font-pop">
                <p className="hidden md:block capitalize font-black text-4xl font-sans tracking-widest font-pop">TLA</p>
                <ul className="flex flex-row justify-center items-center">
                    <li className="mx-2 p-2 hover:text-gray-500 cursor-pointer hover:border-b-2 hover:border-gray-500"><Link to ="home" spy={true} smooth={true}  duration={500} >Home</Link></li>
                    <li className="mx-2 p-2 hover:text-gray-500 cursor-pointer hover:border-b-2 hover:border-gray-500"><Link to ="about"spy={true} smooth={true} offset={5} duration={500}>About</Link></li>
                    <li className="mx-2 p-2 hover:text-gray-500 cursor-pointer hover:border-b-2 hover:border-gray-500"><Link to ="project"spy={true} smooth={true} duration={500}>Project</Link></li>
                    <li className="mx-2 p-2 hover:text-gray-500 cursor-pointer hover:border-b-2 hover:border-gray-500"><Link to ="timeline"spy={true} smooth={true} duration={500}>Timeline</Link></li>
                </ul>
                {/* <ul className="md:hidden flex border-b-2 border-gray-500">
                    <li><Link to ="home" spy={true} smooth={true} offset={0} duration={500}><i className="fa fa-home fa-3x mx-2 p-2 cursor-pointer hover:text-gray-500"></i></Link></li>
                    <li><Link to ="about"spy={true} smooth={true} offset={0} duration={500}><i className="fa fa-address-card fa-3x mx-2 p-2 cursor-pointer hover:text-gray-500"></i></Link></li>
                    <li><Link to ="projects"spy={true} smooth={true} offset={10} duration={500}><i className="fa fa-folder fa-3x mx-2 p-2 cursor-pointer hover:text-gray-500"></i></Link></li>
                    <li><Link to ="home"spy={true} smooth={true} duration={500}><i className="fa fa-phone-square fa-3x mx-2 p-2 cursor-pointer hover:text-gray-500"></i></Link></li>
                </ul> */}
            </div>
        </div>
    )

}