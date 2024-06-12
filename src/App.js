import React from "react";
import Counter from "./Counter";
import Password from "./Password";


function App() {
  return (
    
      
    <div className="flex flex-col items-center justify-center">
    <Counter />
    <div className="h-20 flex"></div>
    <div className="text-xl text-center">Password Generator</div>
    <Password />
  </div>
  
      
    
  );
}

export default App;
