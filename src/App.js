import React from "react";
import Counter from "./Counter";
import Password from "./Password";


function App() {
  return (
    <div className="min-h-screen grid grid-cols-3">
      
      <div className="col-span-2 flex flex-col items-center">
        <Counter />
        <div className="h-20 flex"></div>
        <div className="text-xl">password generator</div>
        <Password />
      </div>
      
    </div>
  );
}

export default App;
