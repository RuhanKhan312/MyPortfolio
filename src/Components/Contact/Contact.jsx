import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ProfilePic from '../../Assets/profilepic.png'

const Contact = () => {
  return (
    <div id='Contact' className='py-28'>
        <div className='m-12 ml-28'>
        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl my-3">Reach out to me</div>
        <div className='grid grid-rows-1 grid-flow-col'>
          <div className='w-4/5'>
            <div className="text-4xl tracking-tight text-gray-400 sm:text-3xl my-2 border-b-2">Discuss a project or have a conversation,my inbox is open for all.</div>
            <div className='flex my-3 text-1xl'><FaMobileAlt className='text-2xl drop-shadow-sm mr-2'/> +91 9767680085 </div>
            <div className='flex my-2'> <SiGmail className="text-2xl drop-shadow-sm mr-3" /> khanruhan312@gmail.com</div>
            <div className='flex my-2'><CiLocationOn className='text-2xl drop-shadow-sm mr-3' /> Nagpur, Maharashtra</div>
            <div className='flex my-2 text-2xl border-b-2'>Open for opportunities: Yes</div>
          </div>
          <div className='mb-1'>
            <img src={ProfilePic}
            alt=""
            className="max-w-[230px] h-[230px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
          </div>
        </div>
        </div>
    </div>
  )
}
export default Contact;
