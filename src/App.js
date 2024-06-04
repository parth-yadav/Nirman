import Leftpane from "./Leftpane";
import React from "react";
import Rightpane from "./Rightpane";



function App() {
  return (
    
    <div className = 'min-h-screen grid grid-cols-3'>
      <Leftpane />
      <Rightpane />

    </div>

  );
}

export default App;
