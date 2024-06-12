import React from "react";
import Counter from "./Counter";
import Password from "./Password";
import Leftpane from "./Leftpane";  // Assuming you have Leftpane component
import Rightpane from "./Rightpane";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-3">
      <Leftpane />
      <div className="col-span-2 flex flex-col items-center">
        <Counter />
        <div className="h-20 flex"></div>
        <div className="text-xl">password generator</div>
        <Password />
      </div>
      <Rightpane />
    </div>
  );
}

export default App;
