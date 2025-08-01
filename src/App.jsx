import "./App.css";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import User from "./components/User/User";

export const light = {
  color: "black",
  backgroundColor: "white",
};
export const dark = {
  color: "white",
  backgroundColor: "black",
};

function App() {
  // const toggleTheme= theme?light:dark;
  return (
    <>
      <Home />
      <User />
    </>
  );
}

export default App;

function Home(params) {
  const { theme, handleClick, light, dark } = useContext(ThemeContext);

  const toggleTheme = theme ? light : dark;
  return (
    <div className="main" style={toggleTheme}>
      <h1>
        EXPLORE <br />
        THE MOVIES <br />
        AROUND <br />
        THE WORLD
      </h1>
      <button onClick={handleClick}>toggle</button>
    </div>
  );
}
