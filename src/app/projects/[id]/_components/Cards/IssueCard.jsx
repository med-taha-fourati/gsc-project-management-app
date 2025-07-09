"use client";

import React, {useState} from 'react'
import Image from 'next/image';
import ProfileTemplate from '../../../../../../public/profile.webp';

const IssueCard = ({title, description, open}) => {
    const [isOpen, setIsOpen] = useState(open);
  return (
    <>
        <div className={`bg-white rounded-lg border ${!isOpen ? "border-green-500" : "border-gray-300" } p-6 my-3 w-full xl:max-w-7/10 sm:max-w-9/10 hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
          <h5 className="text-2xl font-bold">{title ?? "Title"}</h5>
          {isOpen ? (
            <p className="ml-2 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Open</p>)
            : (
            <p className="ml-2 text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full">Closed</p>
            )}
            </div>
            <p className="text-gray-500 mb-4">{description ?? "Description"}</p>
            <div>
              <div className="flex items-center justify-start mb-3">
                <Image src={ProfileTemplate} alt="Profile" width={30} height={30} className="rounded-full inline-block mr-2" /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
              <div className="flex items-center justify-start mb-3">
                <Image src={ProfileTemplate} alt="Profile" width={30} height={30} className="rounded-full inline-block mr-2" /><span>lorem ipsum</span>
              </div>
              <div className="flex items-center justify-start mb-3">
                <Image src={ProfileTemplate} alt="Profile" width={30} height={30} className="rounded-full inline-block mr-2" /><span>lorem ipsum</span>
              </div>
            </div>
            {open ? <textarea className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add a comment..."></textarea> : 
            <textarea className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" placeholder="Issue is closed" disabled></textarea>
            }
            <div className="flex flex-col justify-between items-center mt-4 md:flex-row sm:flex-row gap-8">
              {open ? (
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Comment</button>
                <button className="bg-white text-gray-500 border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300">Comment And Close</button>
              </div>) : (

              <div className="flex">
                <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:cursor-not-allowed" disabled>Issue Closed</button>
              </div>)
              }

              <div className="text-gray-500">
                <p>Created by: <span className="font-semibold">Taha Fourati</span></p>
                <p>Last updated: <span className="font-semibold">2025-01-01</span></p>
              </div>
            </div>
        </div>
    </>
  )
}

export default IssueCard