import React from 'react'
import Ghrcelogo from "../../Assets/ghrce-logo.png";

const Education = () => {
  return (
    <div>
        <div className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Education</div>
        <div> </div> 
        <div data-aos="zoom-in">
            {/* <img
                src={Ghrcelogo}
                alt=""
                className="object-contain w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            /> */}

            <h5 className="font-bold text-ellipsis text-xl h-6 overflow-hidden whitespace-nowrap m-0">G.H. Raisoni College of Engineering, Nagpur</h5> <br></br>
            Bachelor of Technology in Computer Science and Engineering
        </div>
    </div>
  )
}
export default Education;
