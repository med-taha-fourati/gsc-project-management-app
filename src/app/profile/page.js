import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const ProfileWhere = () => {
  return (
    <React.Fragment>
      <Navbar profileName={"Taha Fourati"}/>
      <div className="flex flex-col text-gray-400 bg-transparent w-full justify-center text-center h-full align-center text-xl">
        <h2 className="text-8xl font-bold mb-5">404</h2>
        <p>Please Specify a Profile name</p>
      </div>
    </React.Fragment>
  )
}

export default ProfileWhere