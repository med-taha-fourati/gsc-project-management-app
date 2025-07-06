import React from 'react'

const Closed = ({status}) => {
  return status === true ? (
    <div className="bg-red-100 border border-red-400 text-red-700 w-full max-w-18/20 px-4 py-3 rounded mb-10" role="alert">
            <p>❌ This project has been marked as closed.</p>
        </div>
  ) : "";
}
    
export default Closed