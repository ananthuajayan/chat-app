import React, { useState } from "react";
import "../Components/components.css"

const Sidearea = () => {
  const [mode, setMode] = useState(false);
  const themeChange = () => {
    setMode(!mode);
    console.log("hello");
  };
  return (
    <>
      <div className="md:w-1/3 w-full h-full rounded-sm gap-4 flex flex-col">
        <div className={`flex w-full justify-between ${mode? "bg-black":"bg-slate-200"}  px-2 py-2 rounded-lg`}>
        <div className="w-14 h-14 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          <div className="p-2 flex gap-6">
            <svg
              className="hover:fill-green-500"
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#5f6368"
            >
              <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
            </svg>
            <svg
              className="hover:fill-green-500"
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#5f6368"
            >
              <path d="M820-300q-25 0-42.5-17.5T760-360v-100q0-25 17.5-42.5T820-520q25 0 42.5 17.5T880-460v100q0 25-17.5 42.5T820-300Zm-20 140v-62q-51-8-85.5-46.5T680-360h40q0 42 29 71t71 29q42 0 71-29t29-71h40q0 53-34.5 91.5T840-222v62h-40ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q14 0 27.5 2t26.5 7q-26 31-40 69.5T360-640q0 43 14 81.5t40 69.5q-13 5-26.5 7t-27.5 2ZM40-160v-111q0-34 17-63t47-44q38-20 82.5-34.5T284-435q-40 28-62 71t-22 93v111H40Zm560-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T680-640q0-33-23.5-56.5T600-720q-33 0-56.5 23.5T520-640q0 33 23.5 56.5T600-560ZM280-160v-111q0-34 17-63t47-44q51-26 115.5-44T600-440q12 0 23.5.5T646-438q-10 18-16.5 37.5T621-360h-21q-72 0-127.5 18T381-306q-10 5-15.5 14.5T360-271v31h287q15 26 37 46t49 34H280Zm320-480Zm0 400Z" />
            </svg>
            {mode ? (
              <svg
                onClick={themeChange}
                className=" hover:fill-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                height="34px"
                viewBox="0 -960 960 960"
                width="34px"
                fill="#5f6368"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            ) : (
              <svg
                onClick={themeChange}
                className="fill-yellow-500 hover:fill-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                height="34px"
                viewBox="0 -960 960 960"
                width="34px"
                fill="#5f6368"
              >
                <path d="M396-396q-32-32-58.5-67T289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396Zm57-56q51 51 114 87.5T702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452Zm290 72q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z" />
              </svg>
            )}
          </div>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            className={`w-full p-4 pl-14 rounded-lg outline-none ${mode? "bg-black":"bg-slate-200"}`}
          />
          <svg
            className="absolute left-4 bottom-2"
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#5f6368"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>

        <div className={` ${mode? "bg-black":"bg-slate-200"}  h-full p-2 rounded-lg overflow-y-auto custom-scrollbar`}>
          <div className={`p-3 hover:bg-slate-300 rounded-md flex items-center gap-4 align-items: center; justify-between`}>
            <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div>
              <h3 className={`font-medium ${mode?"text-slate-200":"text-black" }`}>Ananthu Ajayan</h3>
              <p className={`${mode?"text-slate-200":"text-black" }`}>Last message ....</p>
            </div>
            </div>
           
            <div className="flex items-center flex-col">
              <p className="text-xs">09/12/2024</p>
              <p className="text-xs">12:15</p>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Sidearea;
