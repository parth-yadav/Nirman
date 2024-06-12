import React from 'react'
import { useState } from "react";

function Counter() {
    let [num, setNum] = useState(100);

  let [col, setCol] = useState("green");
  const addValue = () => {
    setNum(num + 100);
  };
  const subValue = () => {
    setNum(num - 100);
  };

  const changeBg = () => {
    setCol();
  };
  return (
    <div>
       
        <div
          className="  flex-row flex w-96"
          style={{ backgroundColor: col }}
        >
          <button
            onClick={subValue}
            className="bg-red-300 rounded-full h-20 w-20 "
          >
            decrease
          </button>

          <button
            // onClick={() => setCol("rgb(147 197 253)")}
            onClick={addValue}
            className="bg-green-300 rounded-full h-20 w-20  "
          >
            
            increase
          </button>
          <button
            onClick={() => setCol("rgb(147 197 253)")}
            className="bg-blue-300 rounded-full h-20 w-20 border border-white "
          ></button>
          <button
            onClick={() => setCol("rgb(253 224 71)")}
            className="bg-yellow-300 rounded-full h-20 w-20 border border-white "
          ></button>
          <div className=" rounded-xl h-10 bg-white  text-black text-4xl font-extrabold text-pretty ">
            {num}
          </div>
        </div>
    
      
    </div>
  )
}

export default Counter