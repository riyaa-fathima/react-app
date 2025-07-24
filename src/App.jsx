import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  function increment () {
     
     setCount(count + 1);
     console.log(count)

    }

  function decrement (){
    setCount (count-1);

  }  
  


  return (
    <>
    <h2>Number {count}</h2>
    <button onClick={increment}> increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
 }

export default App
