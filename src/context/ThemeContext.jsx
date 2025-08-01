import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const light = {
    color: "black",
    backgroundColor: "white",
  };
  const dark = {
    color: "white",
    backgroundColor: "black",
  };

  const handleClick = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, light, dark , handleClick}}>
      {children}
    </ThemeContext.Provider>
  );
};
