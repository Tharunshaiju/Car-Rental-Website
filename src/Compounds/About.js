import React from 'react'
import aboutImg from '../Image/Rectangle 5.jpg'

const About = () => {
  return (
    <div id='About' className='m-10'>
        <div className='flex justify-center'>
            <h1 className='text-5xl border-b-4 border-orange-500'>About Us</h1>
        </div>
        <div className='mt-5 flex'>
        <div className=''>
        <img className='w-auto pl-20 ' src={aboutImg} />
        </div>
        <div className='w-2/3 flex items-center'>
            <p className='text-2xl w-2/3 pl-20 space-y-20'>We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance ......</p>
        </div>
        </div>
        

    </div>
  )
}

export default About
