import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListItem from './components/List';
import Condition from './components/condition';

function App() {
  // const isLogin = true;
   const [value,setvalue] = useState();

  const handleChange = (e) => {
    setvalue(e.target.value)
  };

  const handleSubmit = () => {
    alert("hey "+value)
  };
  
  return (
    <>
    

  <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}  />
      <button type='submit'> submit </button>
    </form>

    </>
  )
 };

export default App;

{/* <Condition/>  */}

