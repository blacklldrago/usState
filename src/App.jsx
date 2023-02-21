
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0)
  const inc = ()=>{setCnt(cnt+1)};
  const dec = ()=>{setCnt(cnt-1)};
  return( 
  <div>
      <button onClick={inc}>+</button>
        <h1>{cnt}</h1>
        <button onClick={dec}>-</button>
      
  </div>
  )   
}

export default App;