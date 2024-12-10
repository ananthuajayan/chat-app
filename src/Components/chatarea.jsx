import React from 'react'

const Chatarea = () => {
  return (
    <>
        <div className='hidden md:w-2/3 md:flex w-ful md:h-full h-heightdef rounded-sm flex-col gap-4'>
        <div className="flex w-full justify-between  bg-slate-200 px-2 py-2 rounded-lg">
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-medium">Ananthu Ajayan</h3>
              <p>Online</p>
            </div>
            </div>
          
        </div>
        <div className='h-full  bg-slate-200 rounded-lg overflow-y-auto '>
          Chat area
        </div>
      </div>
    </>
  )
}

export default Chatarea