import React from 'react'

const Navbar = () => {
  return (
    <div>
      <section>
        <div className='flex justify-evenly mt-6'>
            <div>
                <h1 className='font-bold text-3xl text-orange-500'>CARENT</h1>
            </div>
            <div>
                <ul className='flex flex-row space-x-8 pl-10'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Features'>Booking</a></li>
                    <li><a href='#Clients'>Cars</a></li>
                    <li><a href='#Footer'>Contacts</a></li>
                </ul>
            </div>
            <button className='btn rounded-md hover:font-semibold'>Login|Sign up</button>
        </div>
      </section>
    </div>
  )
}

export default Navbar
