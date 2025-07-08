import React from 'react'
import Link from 'next/link'
import './navbar.css'

const Navbar = ({profileName}) => {
  return (
    <div className="m-0 p-0 w-full h-16 bg-white text-white flex items-center fixed top-0 left-0 justify-between px-4 border-b border-gray-300">
    <div>
        <h1 className="text-2xl text-gray-800">GSC Project Management App</h1>
    </div>
    <div className="navbar-items flex items-center space-x-4">
        <Link href="/"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Home</button></Link>
        <Link href="/projects"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Projects</button></Link>
        <Link href="/profile/taha"><button className="text-gray-800 px-4 py-2 rounded hover:bg-gray-300">{profileName ?? "Profile"}</button></Link>
    </div>
    </div>
  )
}

export default Navbar