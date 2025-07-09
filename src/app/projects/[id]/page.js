"use client";

import Navbar from '@/components/Navbar/Navbar'
import {useState} from 'react'
import Closed from './_components/closed'
import Graph from './_components/Charts/Graph'
import FilesCard from './_components/Cards/FilesCard';
import IssueCard from './_components/Cards/IssueCard';

const projectPage = () => {
  const [filesOpen, setFilesOpen] = useState(true);
  return (
    <>
    <Navbar profileName={"Taha Fourati"}/>
    <div className="flex flex-col items-center justify-center w-full mt-[5rem] p-[2rem]">
        <Closed status={true} />
        
        <div className="flex flex-col items-left justify-start w-full xl:max-w-18/22 sm:max-w-9/10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{"Project 1"}</h1>
          <p className="text-lg text-gray-600 mb-8">{"This is a brief description  of the project"}</p>
        </div>

        <div className="m-5 w-full max-w-9/10">
          <div className="flex justify-around items-center">
            <button className={`bg-transparent ${filesOpen ? "border-b-3" : ""} border-blue-400 w-full p-4 text-center transition duration-300 hover:bg-blue-200`}
              onClick={() => setFilesOpen(true)}>
              <p>Files</p>
            </button>
            <button className={`bg-transparent ${!filesOpen ? "border-b-3" : ""} border-blue-400 w-full p-4 text-center transition duration-300 hover:bg-blue-200`}
              onClick={() => setFilesOpen(false)}>
              <p>Issues (5)</p>
            </button>
          </div>
          <hr className='border border-gray-300'/>
        </div>
        
        { filesOpen ? 
        (
          <>
              <FilesCard />
          </>
        ) : 
        (
          <>
            <IssueCard open={false}/>
            <IssueCard open={true} title="Implementing JS"/>
            <IssueCard open={false} title="Error 0x4432345"/>
            <IssueCard open={true} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
            <IssueCard open={false} />
          </>
        ) }
    </div>
    </>
  )
}

export default projectPage