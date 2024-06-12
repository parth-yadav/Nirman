import React from "react";
import { useState, useCallback,useEffect ,useRef} from "react";

function Password() {
  let [len, setLen] = useState(5);
  let [num, setNum] = useState(true);
  let [char, setChar] = useState(true);
  let [pass, setPass] = useState("");

  let pasref = useRef(null);

  const passgen = useCallback(() => {
    let pass = "";
    let strr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) {
      strr += "1234567890";
    }
    if (char) {
      strr += "!@#$%^&*()";
    }

    for (let i = 0; i < len; i++) {
      let charr = Math.floor(Math.random() * strr.length + 1);
      pass += strr.charAt(charr);
    }

    setPass(pass);

  }, [len, num, char]);

  const pascopy = useCallback(() => {
   window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect (() => {
    passgen()
  },[len,num,char]);

  return (
    <div className="w-96 px-3 outline  bg-slate-600 py-3 ">
      <input
        className="rounded-xl w-full  px-1 mb-2 "
        type="text"
        placeholder="Password"
        value={pass}
      ></input>
      <input
        className="rounded-xl w-full  px-1 mb-2"
        type="range"
        min={6}
        max={30}
        value={len}
        onChange={(e) => {setLen(e.target.value)}}
       
      ></input>
      <div className="text-white">
        length: {len}
      </div>
      <div className="flex flex-rowm space-x-1 mt-2">
        <button className="  bg-blue-500 text-white rounded-xl px-2 py-1" 
        onClick={passgen}>
          Generate
        </button>
        
        <button
        type="checkbox" 
        className="bg-blue-500 text-white rounded-xl px-2 py-1 hover:bg-slate-500 " 
        onClick={pascopy}>
          copy
        </button>
      </div>

    </div>
  );
}

export default Password;
