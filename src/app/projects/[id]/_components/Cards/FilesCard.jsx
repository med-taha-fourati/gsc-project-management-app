import React from 'react'

const Files = [
  { name: 'Project Plan', size: '1.2 MB', type: 'PDF', commitMessage: 'Initial Commit' },
  { name: 'Design Mockups', size: '500 KB', type: 'PNG', commitMessage: 'Initial Commit' },
  { name: 'Code Repository', size: '10 MB', type: 'Git', commitMessage: 'Initial Commit' },
  { name: 'Meeting Notes', size: '300 KB', type: 'DOCX', commitMessage: 'Initial Commit' },
];

const FilesCard = () => {
  return (
    <>
        <div className="bg-white rounded-lg border border-gray-300 p-6 my-3 w-full sm:max-w-9/10 xl:max-w-8/10 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Files</h2>

            <div className='flex justify-between items-center'>
              <select className="bg-white rounded-lg border border-gray-300 px-6 py-3 my-3 hover:shadow-xl transition-shadow duration-300">
                <option value="main">main</option>
                <option value="dev">dev</option>
                <option value="feature">feature</option> 
                <option value="release">release</option>
              </select>
              <div>
                <p className="text-gray-500">40 Commits</p>
              </div>
            </div>
            
            {Files.map((file, index) => (
                <div key={index}>
                
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-md hover:underline ">{file.name}.{file.type.toLowerCase()}</p>
              </div>
              <p className="text-gray-500">{file.commitMessage} - {file.size}</p>
            </div>
            <hr className='border border-gray-200 mb-2' />
            </div>
            ))}
        </div>
    </>
  )
}

export default FilesCard