import React, { useState } from "react";
import Sidearea from "../Components/sidearea";
import Chatarea from "../Components/chatarea";

const Main = () => {
  const [mode, setMode] = useState(false);

  return (
    <div className="bg-slate-300 h-screen gap-2 flex flex-col md:flex-row p-2">
      <Sidearea mode={mode} setMode={setMode} />
      <Chatarea mode={mode} setMode={setMode} />
    </div>
  );
};

export default Main;

