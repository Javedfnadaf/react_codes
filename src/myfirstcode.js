import React,{useState,useEffect} from "react";


function App() {
  const[count,setCount] = useState(0)
  useEffect(()=>{
    console.log("call effect")

  })

 function increaseValue(){
  setCount(count + 1)
 }

 return (
  <>
  <h2>{count}</h2>
  <button onClick = {increaseValue}>click me</button>
  </>
)
}
export default App