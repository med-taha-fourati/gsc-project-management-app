import Link from 'next/link'
import React, {useNavigate} from 'react'

const Card = ({ id, name, desc, url, }) => {
  return (
    <>
        <div className="bg-white rounded-lg border border-gray-300 p-6 my-3 w-full max-w-8/10 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700 mb-4">This is a brief description of the project. It provides an overview of the project's goals and objectives.</p>
            
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Created on: {new Date().toISOString().split('T')[0]}</span>
                <Link href="/projects/1" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
            </div>
        </div>
    </>
  )
}

export default Card