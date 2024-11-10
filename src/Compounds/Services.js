import React from 'react'
import { FaArrowsRotate } from "react-icons/fa6";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { PiGpsFixBold } from "react-icons/pi";
<PiGpsFixBold />

const Services = () => {
  return (
    <div className='mt-10'>
      <div className='bg-black w-full '>
        <div className='flex justify-center pt-5'>
       <h1  className='text-5xl border-b-4 border-orange-500'>Our Premium Services</h1>
       </div>
        <div className='flex justify-center '>
        <p className='text-2xl p-10 w-1/3'>Carent is a reputable car rental company that offers a wide range of useful services for every taste.</p>
        </div>
        <div className='flex justify-center gap-12'>
        <div className='bg-white text-black w-1/6 rounded-md h-300 pb-20 mb-5'>
            <p  className='flex justify-center pt-10'><FaArrowsRotate color='orange' size={50}/></p>
            <p className='flex justify-center font-semimedium text-2xl pt-3'>24 Hours Support</p>
            <p className='flex justify-center pt-3'> We support you
            all hours of the day, </p>
        </div>
        <div className='bg-white text-black w-1/6 rounded-md h-300 pb-20 mb-5'>
            <p className='flex justify-center pt-10'><LiaCheckCircleSolid color='orange'size={50} /></p>
            <p className='flex justify-center font-semimedium text-2xl  pt-3'>Qualified Assurance</p>
            <p className='flex justify-center pt-3'>All cars have a 
            valid insurance.  </p>
        </div>
        <div className='bg-white text-black w-1/6 rounded-md h-300 pb-20 mb-5'>
            <p className='flex justify-center pt-10'><PiGpsFixBold color='orange' size={50}/></p>
            <p className='flex justify-center font-semimedium text-2xl  pt-3'>GPS on Cars</p>
            <p className='flex justify-center pt-3'>All cars are equipped with<br />
            GPS navigation system.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
