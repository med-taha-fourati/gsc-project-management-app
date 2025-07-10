"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import './navbar.css'

const Navbar = ({profileName}) => {
  const [smOpen, isSmOpen] = useState(false);
  return (
    <>
    <div className="fixed top-0 left-0 w-full">
    <div className="m-0 p-0  h-full bg-white text-white flex items-center justify-between px-4 border-b border-gray-300">
      <div>
          <h1 className="text-2xl text-gray-800 py-4">GSC Project Management App</h1>
      </div>
      <div className="navbar-items hidden items-center space-x-4 md:flex">
          <Link href="/"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Home</button></Link>
          <Link href="/projects"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Projects</button></Link>
          <Link href="/profile/taha"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">{profileName ?? "Profile"}</button></Link>
      </div>
      
      <div className="navbar-items flex md:hidden items-center space-x-4">
          <button className="border border-gray-500 p-2 rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white transition duration-300" onClick={() => isSmOpen(!smOpen)}>{"menu"}</button>
          {/*  */}
      </div>
            
       
      </div>
      <div className={`bg-white ${smOpen ? 'flex' : 'hidden'} flex-col text-gray-800 shadow md:hidden`}>
        <Link href="/"><button className="text-gray-800 w-full px-4 text-left py-3 hover:bg-gray-300">Home</button></Link>
          <Link href="/projects"><button className="text-gray-800 px-4 w-full py-3 text-left hover:bg-gray-300">Projects</button></Link>
          <Link href="/profile/taha"><button className="text-gray-800 w-full px-4 py-3 text-left hover:bg-gray-300">{profileName ?? "Profile"}</button></Link>
        </div>
    </div>
      </>
  )
}

export default Navbar