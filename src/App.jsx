import React, { useState } from "react";
import Model from "../components/Model";
import Navbar from "../components/Navbar";

const App = () => {
  const [animationSwitch,setAnimationSwitch] = new useState("");
  const click1 = ()=>{
    setAnimationSwitch("click1");
  }
  const click2 = ()=>{
    setAnimationSwitch("click2");
  }
  const click3 = ()=>{
    setAnimationSwitch("click3");
  }
  const click4 = ()=>{
    setAnimationSwitch("click4");
  }
  return (
    <>
    {/* <div className="absolute top-0 right-0 h-screen w-screen">
    <Navbar/>
    <div className="grid grid-cols-3">
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 h-full w-full"></div>
      <div className="bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 h-full w-full"></div>
      <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 h-full w-full"></div>
    </div> */}
    {/* </div> */}
    <button onClick={click1} className="cursor-pointer">CLICK1</button>
    <button onClick={click2} className="cursor-pointer">CLICK2</button>
    <button onClick={click3} className="cursor-pointer">CLICK3</button>
    <button onClick={click4} className="cursor-pointer">CLICK4</button>
    <div className="h-screen w-full flex justify-center items-center">
      <Model animationSwitch={animationSwitch}/>
    </div>
    </>
  );
};

export default App;
