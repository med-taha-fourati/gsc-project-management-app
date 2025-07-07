"use client";

import Navbar from '@/components/Navbar/Navbar'
import {useState} from 'react'
import Closed from './_components/closed'
import Graph from './_components/Charts/Graph'
import FilesCard from './_components/FilesCard/FilesCard';
import IssueCard from './_components/IssueCard/IssueCard';

const projectPage = () => {
  const [filesOpen, setFilesOpen] = useState(true);
  return (
    <>
    <Navbar profileName={"Taha Fourati"}/>
    <div className="flex flex-col items-center justify-center w-full mt-[4rem] p-[2rem] overflow-scroll">
        <Closed status={false} />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Details</h1>
        <p className="text-lg text-gray-600 mb-8">Here you can view and manage your project details.</p>
        <div className="m-5 w-full max-w-9/10">
          <div className="flex justify-around items-center">
            <button className={`bg-transparent ${filesOpen ? "border-b-3" : ""} border-blue-400 w-full p-4 text-center transition duration-300 hover:bg-blue-200`}
              onClick={() => setFilesOpen(true)}>
              <p>Files</p>
            </button>
            <button className={`bg-transparent ${!filesOpen ? "border-b-3" : ""} border-blue-400 w-full p-4 text-center transition duration-300 hover:bg-blue-200`}
              onClick={() => setFilesOpen(false)}>
              <p>Issues</p>
            </button>
          </div>
          <hr className='border border-gray-300'/>
        </div>
        
        { filesOpen ? 
        (
          <>
            <FilesCard />
            <Graph /> 
          </>
        ) : 
        (
          <>
            <IssueCard open={false}/>
            <IssueCard open={true} title="Implementing JS"/>
            <IssueCard open={false} title="Error 0x4432345"/>
            <IssueCard open={true}/>
            <IssueCard open={false} />
          </>
        ) }
    </div>
    </>
  )
}

export default projectPage