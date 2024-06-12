import Leftpane from "./Leftpane";
import { useState } from "react";
import React from "react";
import Rightpane from "./Rightpane";
import Counter from "./Counter";
import Password from "./Password";

function App() {
  
  return (
    
    <>
    <div className="flex flex-col items-center">

    
     < Counter />
     <div className="h-20 flex" >

     </div>
     <div className="text-xl ">
      password generator
     </div>
      <Password />
     </div>
    </>

  );
}

export default App;
