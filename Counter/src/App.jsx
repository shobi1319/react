import './App.css'
import { useState } from 'react'
function App() {


  let [counter,setCounter] =useState(15)
  //let counter=10

  const addVal=()=>{
    console.log(counter)
  if(counter<15)
  setCounter(counter+=1)
}
  const remVal=()=>{
    if(counter>0)
    setCounter(counter-=1)
}
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter value :{counter}</h2>

     <button onClick={addVal}>Add Value</button>
     <br />
     <button onClick={remVal}>Remove Value</button>
    </>
  )
}

export default App
