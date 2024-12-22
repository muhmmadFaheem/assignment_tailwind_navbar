import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className='bg-black w-full h-auto sm:12 md:16 lg:17 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
            <div className='mb-4 sm:0'>
                <h1 className='text-green-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>
                    <a href="#!">Responsive Navbar</a></h1>
            </div>

            <div className='w-full sm:w-auto mb-4 sm:mb-0'>
                <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 '>
                    <li ><Link className='text-green-400 hover:text-white' href='#!'>Home</Link></li>
                    <li ><Link className='text-green-400 hover:text-white' href='#!'>Categories</Link></li>
                    <li ><Link className='text-green-400 hover:text-white' href='#!'>About</Link></li>
                    <li ><Link className='text-green-400 hover:text-white' href='#!'>Contact</Link></li>


                </ul>
            </div>

            <div className='w-full sm:w-auto'>
                <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
                <li ><Link className='text-green-400 hover:text-white' href='#!'>Login</Link></li>
                <li ><Link className='text-green-400 hover:text-white' href='#!'>Logout</Link></li>
                </ul>

            </div>

        </nav>
    </div>
  )
}
