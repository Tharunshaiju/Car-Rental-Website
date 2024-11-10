import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id='Footer' className='bg-black '>
      <div className='flex justify-center p-20'>
        <p>Need help renting a car? Please call<span className='text-orange-500 p-2 hover:font-semibold'>+1-333-444-5555</span></p>
      </div >
      <div className='flex justify-between p-10'>
      <p className='text-3xl text-orange-500 font-medium'>CARENT</p>
      <ul className='flex flex-row gap-6'>
        <li><FaSquareFacebook color='orange' size={40} /></li>
        <li><FaInstagramSquare color='orange' size={40} /></li>
        <li>< FaTwitterSquare color='orange' size={40} /></li>
        <li><FaTelegram color='orange' size={40} /></li>
        <li><FaSquareWhatsapp color='orange' size={40} /></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
