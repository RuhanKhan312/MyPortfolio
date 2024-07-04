import React from 'react'
import SkillsImg from "../../Assets/skills_banner.png"
import { FcFlashOn } from "react-icons/fc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div id='Skills' className="min-h-[550px] flex justify-center items-center py-8 sm:py-0  dark:bg-gray-950 dark:text-white">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div data-aos="zoom-in">
                    <img
                        src={SkillsImg}
                        alt=""
                        className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                        What I do
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="text-xl text-gray-500 tracking-wide leading-5"
                    >
                        Hey, I'm a full-stack developer who's always eager to explore <br/> new technologies.    
                    </p>
                    <div className="flex items-center w-full h-11 text-size mt-4 space-x-3">
                    <FaHtml5 className="text-5xl drop-shadow-sm cursor-pointer"/>
                    <FaCss3Alt className="text-5xl drop-shadow-sm cursor-pointer" />
                    <IoLogoJavascript className="text-5xl drop-shadow-sm cursor-pointer" />
                    <RiReactjsFill className="text-5xl drop-shadow-sm cursor-pointer" />
                    <FaNode className="text-5xl drop-shadow-sm cursor-pointer"/>
                    <SiVite className="text-5xl drop-shadow-sm cursor-pointer" />
                    <BiLogoMongodb className="text-5xl drop-shadow-sm cursor-pointer" />
                    <FaJava className="text-5xl drop-shadow-sm cursor-pointer" />
                    <FaPython className="text-5xl drop-shadow-sm cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <FcFlashOn className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                            <p className='dark:text-white text-lg'>Develop highly interactive Front End / User Interfaces for your <br/>
                             website</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <FcFlashOn className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                            <p className='dark:text-white text-lg'>Develop UI for mobile applications</p>
                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <FcFlashOn className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                            <p className='dark:text-white text-lg'>Develop backend / Full stack website</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
  );
};
export default Skills;
