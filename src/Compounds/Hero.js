import React from 'react'
import hero from '../Image/Main Picture.jpg'

const Hero = () => {
  return (
    <div className='flex mt-10'>
        <div className='flex flex-col bg-black justify-center w-1/3 pl-40'>
            <div className='w-full absolute space-y-5'>
                <p className='text-5xl font-bold text-white'>Enjoy your life with <br /> our comfortable<br/> cars.</p>
                <p className='font-semibold text-white text-2xl'>Carent, is ready to serve the best<br/> experience in car rental.</p>
                <button className='btn2 rounded-md  hover:font-bold '>Explore Now</button>
            </div>
            
        </div>
        <img  src={hero} width={1400} />
      
    </div>
  )
}

export default Hero
