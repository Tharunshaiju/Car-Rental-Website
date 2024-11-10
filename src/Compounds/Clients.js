import React from 'react'
import clientImg1 from '../Image/Ellipse 62.png'
import clientImg2 from '../Image/Ellipse 63.png'

const Clients = () => {
  return (
    <div id='Clients' className='w-full'>
      <div className='flex justify-center mt-10'>
       <h1  className='text-5xl border-b-4 border-orange-500'>What Our Clients Say?</h1>
      </div>
    <div className='flex justify-center gap-10 m-10'>
      <div className='w-1/4 border-2 rounded-lg p-10 space-y-6'>
            <div className='flex justify-center'>
                <img src={clientImg1} />
            </div>
        <div className=''>
            <p className='flex justify-center text-2xl'>Kristin Watson</p>
            <p className='pt-5'>I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them.</p>
          </div>
       </div>
    
       <div className='w-1/4 border-2 rounded-lg p-10 space-y-6'>
            <div className='flex justify-center'>
                <img src={clientImg2} />
            </div>
        <div className=''>
            <p className='flex justify-center text-2xl'>Robert Fox</p>
            <p className='pt-5'>During my last trip, I used a Carent sport car . The car was completely clean and had enough gas.</p>
          </div>
       </div>
    </div>


    <div className='flex bg-orange-200 justify-evenly p-10'>
        <div className=''>
            <p className='flex justify-center text-4xl'>450+</p>
            <p className='text-2xl font-sans text-gray-600'>Cars For Rent</p>
        </div>
        <div>
            <p className='flex justify-center text-4xl '>800+</p>
            <p className='text-2xl font-sans text-gray-600'>Happy Clients</p>
        </div>
        <div>
            <p className='flex justify-center text-4xl'>750+</p>
            <p className='text-2xl font-sans text-gray-600'>Rental Locations</p>
        </div>
    </div>
    </div>
  )
}

export default Clients
