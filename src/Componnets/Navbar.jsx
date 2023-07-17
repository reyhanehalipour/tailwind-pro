import React, { useState } from 'react'
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {

  const[nav,setnav]= useState(false)

  const NavHandler=()=>{
    setnav(!nav)
  }
  return (
    <div className='text-white flex justify-between h-24 max-w-[1240px] mx-auto px-4 items-center'>
        <h1 className='w-full text-3xl font-bold  text-[#00df9a]'>react</h1>

        <ul className='  hidden md:flex'>
            <li className='p-4'>home</li>
            <li className='p-4'>Resourse</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={NavHandler} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>

        <h1 className='w-full text-3xl font-bold  text-[#00df9a]'>react</h1>

        <ul className='p-12 uppercase' >
            <li className='p-4 border-gray-100'>home</li>
            <li className='p-4 border-gray-100 '>Resourse</li>
            <li className='p-4  border-gray-100'>Company</li>
            <li className='p-4 border-gray-100 '>About</li>
            <li className='p-4 border-gray-100 '>Contact</li>
        </ul>

        </div>
    </div>
  )
}
