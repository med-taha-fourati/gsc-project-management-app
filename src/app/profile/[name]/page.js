import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import DefaultProfile from '../../../../public/profile.webp'
import Graph from '../../projects/[id]/_components/Charts/Graph'
import IssuePercentageCard from './_components/IssuePercentageCard'

const profile = () => {
  return (
    <>
        <Navbar profileName={"Taha Fourati"} />
        
        <div className="flex flex-col items-center justify-center w-full mt-[4rem] p-[2rem] overflow-scroll">
            <div className="flex flex-row items-center justify-between w-full max-w-9/10 mb-8">
              <div className="flex justify-left items-center w-full max-w-9/10">
                  <Image src={DefaultProfile} alt="Profile" width={100} height={100} className="rounded-full mr-4" />
                  <h1 className="text-4xl font-bold text-gray-800 ml-6">Taha Fourati</h1>
              </div>

              <div className="flex justify-end items-center w-full max-w-9/10 mb-8">
                  <button className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition duration-300">Edit Profile</button>
              </div>
              {/* this is a test commit */}
            </div>

            <hr className="w-full border border-gray-300"/>

            <div className="flex flex-col items-center w-full mt-8 md:flex-row md:justify-between md:items-start gap-8 md:max-w-9/10">
                <Graph />
                <IssuePercentageCard totalIssues={200} closedIssues={36}/>
            </div>
        </div>
    </>
  )
}

export default profile