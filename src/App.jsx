import React from "react";
// import "./App.css";
import { useState } from "react";
import { useContext } from "react";
const ThemeContext = React.createContext();
const light = {
  color: "black",
  backgroundColor: "white",
};
const dark = {
  color: "white",
  backgroundColor: "black",
};

function App() {
  const [theme, setTheme] = useState(true);

  function handleClick() {
    setTheme(!theme);
    console.log(theme);
  }

  return (
    <>
      <div className="main" style={theme ? light : dark }>
        <h1 style={{color: "lemonchiffon"}}>
          EXPLORE <br />
          THE MOVIES <br />
          AROUND THE WORLD
        </h1>
        <button onClick={handleClick} >toggle</button>
      </div>
    </>
  );
}

export default App;
