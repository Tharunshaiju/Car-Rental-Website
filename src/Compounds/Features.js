import React from 'react'
import car1 from '../Image/Rectangle 6.jpg'
import car2 from '../Image/Rectangle 7.jpg'
import car3 from '../Image/Rectangle 8.jpg'
import { BsFillPeopleFill,} from "react-icons/bs";
import { RiGasStationFill } from "react-icons/ri";
import { BiSolidEvStation } from "react-icons/bi";

const Features = () => {
  return (
    <div id='Features'>
       <div className='flex justify-center m-10'>
        <h1 className='text-5xl border-b-4 border-orange-500'>Our Featured Cars</h1>
      </div>
    <div className='flex gap-10 justify-center'>
      <div className='border-2 w-1/5 rounded-md'>
        <img className='p-5' src={car1} />
        <p className='pl-5 font-medium text-xl pb-4'>Jeep XP</p>
        <ul className='flex gap-6 font-medium pl-5'>
            <li className='flex gap-2'><BsFillPeopleFill /> 5</li>
            <li className='flex gap-2'><RiGasStationFill />Gasoline</li>
            <li className='flex gap-2'><BsFillPeopleFill />SUv</li>
        </ul>
        <div className='flex mt-5'>
            <p className='pl-5'>Daily rate from <br />$200</p>
            <button className='btn3 ml-24 rounded-md hover:font-semibold'>Book Now</button>
        </div>
      </div>
      <div className='border-2 w-1/5 rounded-md'>
        <img className='p-5' src={car2} />
        <p  className='pl-5 font-medium text-xl pb-4'>Ferrari Enzo</p>
       <ul className='flex gap-6 pl-5 font-medium'>
        <li className='flex gap-2'><BsFillPeopleFill />2</li>
        <li className='flex gap-2'><BiSolidEvStation />Electric</li>
        <li className='flex gap-2'><BsFillPeopleFill />Sedan</li>
       </ul>
       <div className='flex mt-5'>
            <p className='pl-5'>Daily rate from <br />$200</p>
            <button className='btn3 ml-24 rounded-md hover:font-semibold'>Book Now</button>
        </div>
      </div>
      <div className='border-2 w-1/5 rounded-md'>
        <img className='p-5' src={car3} />
        <p  className='pl-5 font-medium text-xl pb-4'>Fiat Cope</p>
        <ul className='flex gap-6 pl-5 font-medium'>
            <li className='flex gap-2'><BsFillPeopleFill />4</li>
            <li className='flex gap-2'><RiGasStationFill />Gasoline</li>
            <li className='flex gap-2'><BsFillPeopleFill />Mini coupe</li>
        </ul>
        <div className='flex mt-5'>
            <p className='pl-5'>Daily rate from <br />$200</p>
            <button className='btn3 ml-24 rounded-md hover:font-semibold'>Book Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
