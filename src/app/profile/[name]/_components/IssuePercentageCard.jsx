import React from 'react'

const IssuePercentageCard = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 p-6 my-3 w-full max-w-9/10 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">Issue Tracker</h2>
        <div className='flex justify-center items-center mx-4 my-4'>
            <p className="text-blue-500 text-8xl font-semibold">{Math.round((36 / 45) * 100)} %</p>
        </div>

        <div className="flex justify-between items-center text-center mx-4 my-2">
            <div className="w-1/2">
                <p className="text-gray-500">Total Issues: <span className="font-semibold">45</span></p>
            </div>
            <div className="w-1/2">
                <p className="text-gray-500">Closed Issues: <span className="font-semibold">36</span></p>
            </div>
        </div>
    </div>
  )
}

export default IssuePercentageCard