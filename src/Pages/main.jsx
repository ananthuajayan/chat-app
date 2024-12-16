import React from "react";
import Sidearea from "../Components/sidearea";
import Chatarea from "../Components/chatarea";

const Main = () => {
 

  return (
    <div className="bg-slate-300 h-screen gap-2 flex flex-col md:flex-row p-2">
      <Sidearea  />
      <Chatarea  />
    </div>
  );
};

export default Main;

