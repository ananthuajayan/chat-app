import React from 'react'
import Outgoing from './outgoing-messages'
import Incoming from './Incoming-messages'
import { useSelector,useDispatch } from 'react-redux'
import "../Components/components.css"

const Chatarea = ({mode,setMode}) => {
  const dispatch = useDispatch();
  const modes = useSelector(state=>state.theme.mode);
  console.log(modes);
  


  return (
    <>
        <div className='hidden md:w-2/3 md:flex w-ful md:h-full h-heightdef rounded-sm flex-col gap-4'>
        <div className={`flex w-full justify-between ${modes==="light"? "bg-black":"bg-slate-200"} px-2 py-2 rounded-lg`}>
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div>
              <h3 className={`font-medium ${modes === "light"? "text-slate-200":"text-black"}`}>Ananthu Ajayan</h3>
              <p className={` ${modes === "light"? "text-slate-200":"text-black"}`}>Online</p>
            </div>
            </div>
          
        </div>
        <div className='h-full  bg-slate-200 rounded-lg overflow-y-auto p-2 custom-scrollbar flex flex-col gap-6'>
          <div className='flex w-full justify-start'>
            <Outgoing/>
          </div>
          <div className='flex w-full justify-end'>
            <Incoming/>
          </div>
        </div>
        <div className='w-full relative'>
          <input type="text" placeholder='Text here....' className='w-full rounded-lg p-3 pl-5  pr-16 outline-none border-none'/>
        </div>
      </div>
    </>
  )
}

export default Chatarea